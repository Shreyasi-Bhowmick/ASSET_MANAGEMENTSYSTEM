import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userassets',
  templateUrl: './userassets.component.html',
  styleUrls: ['./userassets.component.css']
})
export class UserassetsComponent implements OnInit {

  assets;

  constructor(private service:DataService,private router:Router) { }

  ngOnInit() {
    let observables= this.service.getUserDataFromAPI();
      observables.subscribe(response=>
      {
        this.assets=response['data'];
        console.log(this.assets);
        
      })
  }

request(userId:Number,title:String,category:String,quantity:Number,price:Number,additionaldetails:String)
{
  alert('request send to admin for approval');
  console.log(userId);
  console.log(title);
  this.service.addToCurrentAssets(title,category,quantity,price,additionaldetails).subscribe(data=>{
    console.log(data);
    // alert('');
    
  });
  // this.router.navigate([`currentassets/${userId}`],
  // {
  //   queryParams:
  //   {

  // title:this.assets.title,
  // quantity:this.assets.quantity,
  // price:this.assets.price,
  //  category:this.assets.category,
  //   additionaldetails:this.assets.additionaldetails
  //   }
  // })
  
}

}