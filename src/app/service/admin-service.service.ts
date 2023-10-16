import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService 
{
username:any;
 
  private sessionData: any = {};

  set(key: string, value: any) {
    this.sessionData[key] = value;
  }

  get(key: string) {
    return this.sessionData[key];
  }

  adminValidation(name:any,email:any,pass:any):boolean
  {
    if(name=="Admin001ProCat" && email=="admin001procat@procat.in" && pass=="ProductCatalog@*123" )
    { 
      this.setUsername(email)
      console.log(this.username);
      return true;
    }
    else if(name=="Admin002ProCat" && email=="admin002procat@procat.in" && pass=="ProductCatalog@*123")
    {
      this.setUsername(email)
      console.log(this.username);
      return true;
    }
    else if(name=="Admin003ProCat" && email=="admin003procat@procat.in" && pass=="ProductCatalog@*123")
    {
      this.setUsername(email)
      console.log(this.username);
      return true;
    }
   return false;
  }
  getUsername()
  {
    return this.username;
  }
  setUsername(un:string)
  {
    this.username=un;
  }



  
}