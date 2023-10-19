import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService 
{
username:any;
 list:Observable<any>[]=[];
 url:string="http://localhost:9094/SuperAdmin/credentialsValidate"
 constructor(private http:HttpClient) { }
  // private sessionData: any = {};

  // set(key: string, value: any) {
  //   this.sessionData[key] = value;
  // }

  // get(key: string) {
  //   return this.sessionData[key];
  // }

  


// adminValidation(name:any,email:any,pass:any)
// {
//   console.log("in service");
  
//   this.list=this.getAdmins();
//   console.log(this.list);
// }

getAdmins(email:any,password:any){

  console.log(email,password);

const logs={email,password};

return this.http.post<string>(this.url,logs);
}
// getAdmins()
//   {
      
//     return this.http.get(this.url);
  


//   //   if(name=="Admin001ProCat" && email=="admin001procat@procat.in" && pass=="ProductCatalog@*123" )
//   //   { 
//   //     this.setUsername(email)
//   //     console.log(this.username);
//   //     return true;
//   //   }
//   //   else if(name=="Admin002ProCat" && email=="admin002procat@procat.in" && pass=="ProductCatalog@*123")
//   //   {
//   //     this.setUsername(email)
//   //     console.log(this.username);
//   //     return true;
//   //   }
//   //   else if(name=="Admin003ProCat" && email=="admin003procat@procat.in" && pass=="ProductCatalog@*123")
//   //   {
//   //     this.setUsername(email)
//   //     console.log(this.username);
//   //     return true;
//   //   }
  
//   }
  getUsername()
  {
    return this.username;
  }
  setUsername(un:string)
  {
    this.username=un;
  }



  
}