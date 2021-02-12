import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { details } from './info';
import { JobInfoService } from './job-info.service';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[JobInfoService]
})
export class DetailsComponent implements OnInit {
  
  error:string;
  jobinfo:details[]=[];
  filtered:details[];
  onlyten:details[];
  currentval="";
  work_type:string;


  constructor(private jobdetails:JobInfoService) { 
  console.log(jobdetails);
  }

  selectchangevalue(event:any)
  {
    this.work_type=event.target.value;
    console.log(this.work_type);
  }
  search()
  {
    if(this.work_type==="All")
    {
       this.ngOnInit();
    }
    else
    {
    this.filtered=this.work_type?this.filterData(this.work_type):this.jobinfo;
    }
  }
 
  loadmore()
  {
    this.filtered=this.jobinfo.slice(11,50);
  }
   onclick(url)
   {
     if(url)
     {
       window.location.href=url;
     }
     else
     {
       alert("URL DONES'T EXSIST");
     }
   }
  ngOnInit(): void {
    this.jobdetails.getDetails().subscribe({
        next: data=>
        {
          this.jobinfo=data;
          this.onlyten=this.jobinfo;
          this.filtered=this.onlyten.slice(0,10);
          //this.filtered=this.jobinfo;
        },
        error: err=>
        {
        this.error=err.message
        console.log(this.error);
        }
    });

  }
 filterData(text:string):details[]
  {
    return this.jobinfo.filter((data:details)=>data.type.toLowerCase().indexOf(text.toLowerCase())!==-1);
  }

}
