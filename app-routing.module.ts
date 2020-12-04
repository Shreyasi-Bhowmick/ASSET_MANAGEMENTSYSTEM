import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddnewassetsComponent } from './addnewassets/addnewassets.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthGuard } from './auth.guard';
import { CurrentassetsComponent } from './currentassets/currentassets.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { GeneratereportComponent } from './generatereport/generatereport.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserassetsComponent } from './userassets/userassets.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path: 'editprofile/:id',component:EditprofileComponent},
  {path: 'userprofile/:id',component:UserprofileComponent},
  {path:'currentassets',component:CurrentassetsComponent, canActivate:[AuthGuard]},
  {path:'addnewassets',component:AddnewassetsComponent},
  {path:'generatereport',component:GeneratereportComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userassets',component:UserassetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
