import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddnewassetsComponent } from './addnewassets/addnewassets.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CurrentassetsComponent } from './currentassets/currentassets.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { GeneratereportComponent } from './generatereport/generatereport.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserassetsComponent } from './userassets/userassets.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    EditprofileComponent,
    UserprofileComponent,
    CurrentassetsComponent,
    AddnewassetsComponent,
    GeneratereportComponent,
    AdminloginComponent,
    UserassetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
