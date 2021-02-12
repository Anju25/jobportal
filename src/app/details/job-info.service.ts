import { Injectable } from '@angular/core';
import { details } from './info';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class JobInfoService {
  url:string='https://jobs.github.com/positions.json';

  constructor(private http: HttpClient) {}

  getDetails(): Observable<details[]>
   {
     return this.http.get<details[]>(this.url).pipe(
       tap(data=>console.log(JSON.stringify(data)),
       catchError(this.errorHandler)
       )
     );
   }

   errorHandler(err: HttpErrorResponse): (e: any) => void {
    throw new Error(err.error.message);
  }

}
