import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  updateForm:FormGroup;
users;
id;
  constructor(private fb :FormBuilder,private service:DataService,private activated:ActivatedRoute) { 
    this.activated.params.subscribe(data=>{
      console.log(data);
      
      this.id=data;
      // console.log(this.id.id);
    });
    this.activated.queryParams.subscribe(data=>{
      this.users=data;
      console.log(this.users);
    })
  }

  ngOnInit() {
    this.updateForm=this.fb.group({
       id:this.fb.control(''),
      firstname:this.fb.control(''),
      lastname:this.fb.control(''),
      email:this.fb.control(''),
      password:this.fb.control('')
    });
  }


update(id:Number,firstname:String,lastname:String,email:String,password:String){
  id=this.id.id;
    this.service.updateUserToAPI(id,firstname,lastname,email,password).subscribe(data=>{
      console.log(data);
        alert('update successfully');
    });
  }
}
