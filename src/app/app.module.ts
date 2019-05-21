import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee.service';
import { HttpModule } from '@angular/http';
import { MyFormComponent } from './my-form/my-form.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { ProfileComponent } from './component/profile/profile.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule,Routes}from '@angular/router';

import { UserProfileComponent } from './component/user-profile/user-profile.component'

const appRoutes:Routes=[
  {
    path:"",
    component:HomeComponent,
  },
  {
    path:"profile",
    component:ProfileComponent,
  },
  {
    path:"user/:id",
    component:UserProfileComponent,
  }

]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    
    MyFormComponent,
    
    HomeComponent,
    
    ProfileComponent,
    
    NavBarComponent,
    
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
