import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  users;
    constructor(private fb :FormBuilder,private service:DataService,private router : Router) { }
  
    ngOnInit() {
       this.loginForm=this.fb.group({
        email:this.fb.control('',[Validators.required]),
        password:this.fb.control('',[Validators.required])
      });
    }
  
  
  login(email:String,password:String,id:Number){
    console.log(email,password);
    
      this.service.userLogin(email,password).subscribe(response=>{
        console.log(response);
        if(response['data'] == null){
          alert('please check details or register first');
          this.router.navigateByUrl('signup');
        }
        this.users=response['data'];
        //console.log(this.users.id);
        
        
        // console.log(response['data'].id);
        if(response['data'].type == "customer"){
          localStorage.setItem('user',"123456");
          console.log(response);           
          alert('user login successfully');
          this.router.navigate([`userprofile/${this.users.id}`],{
            queryParams:{
              fname:this.users.firstname,
              lname:this.users.lastname,
              email:this.users.email,
              password:this.users.password    
            }
          })
        }else if(response['data'].type == "admin"){
          // alert('please check details or register first');
          localStorage.setItem('admin',"123456");
          console.log(response);
          //console.log(response['data'].id);  
          alert('admin login successfully');
          this.router.navigateByUrl('currentassets');
    
        }
      });
      
    }
  register(){
    this.router.navigateByUrl('signup');
  }
  
  logout(){
    localStorage.removeItem("user");
    this.router.navigateByUrl('signup');
  }
  isCustomerLoggedIn(){
    return localStorage.getItem("user");
  }
  }
  