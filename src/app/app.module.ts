import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JobInfoService } from './details/job-info.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component : DetailsComponent},
     /*{ path: 'fulldetailcomponent', component :FulldetailsComponent},*/
      /*{path:"fulldetailcomponent/:",component:FulldetailsComponent}*/
    ])

  ],
  providers: [JobInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
