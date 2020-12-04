import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  api='http://localhost:8080/register';

  constructor(private http: HttpClient) { }

  getDataFromAPI(){
   return this.http.get('http://localhost:8080/assets');
  }
  
  // getReport(category,quantity,totalprice){
  //   let report={
  //     category:category,
  //     quantity:quantity,
  //     totalprice:totalprice
  //   }
  //   return this.http.post('http://localhost:8080/report',report);
  // }

  addUserToService(firstname,lastname,email,password){
    let user={
      firstname:firstname,
      lastname:lastname,
      email:email,
      password:password
    }
    return this.http.post(`http://localhost:8080/register`,user);
  }

  getUserFromAPI(){
    return this.http.get('http://localhost:8080/detail');
  }


  addAssetToService(title,category,quantity,price,additionaldetails){
    let asset={
      title:title,
      category:category,
      quantity:quantity,
      price:price,
      additionaldetails:additionaldetails
    }
    return this.http.post('http://localhost:8080/asset',asset);
  }


  userLogin(email,password){
    // let user={
    //   email:email,
    //   password:password
    // }
  return this.http.get('http://localhost:8080/login/'+'?'+'email'+'='+email+'&'+'password'+'='+password);
  }

  updateUserToAPI(id,firstname,lastname,email,password){
    let user={
      id:id,
      firstname:firstname,
      lastname:lastname,
      email:email,
      password:password
    }
    console.log(user);
    
    return this.http.put('http://localhost:8080/update',user);
  }

  getUserDataFromAPI(){
    return this.http.get('http://localhost:8080/userassets');
  }
  
  addToCurrentAssets(title,category,quantity,price,additionaldetails){
    let assets={
      title:title,
      category:category,
      quantity:quantity,
      price:price,
      additionaldetails:additionaldetails
    }
    return this.http.post('http://localhost:8080/adminAsset',assets);
  }

  removeAsset(id){
    console.log(id);
    
    return this.http.delete('http://localhost:8080/delete?id='+id); 
  }

  addToGenerateReport(category,quantity,totalprice){
    let add={
      // id:id,
      category:category,
      quantity:quantity,
      totalprice:totalprice
    }
    return this.http.post('http://localhost:8080/report',add);
  }

getReport(){
  return this.http.get('http://localhost:8080/report');
}

}
