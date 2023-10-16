import { Injectable } from '@angular/core';
import { WlinePrepaid } from '../module/wless-prepaid/WlessPrepaid';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WlineserviceService {

  constructor(private http:HttpClient) { }


  url:String="http://localhost:9091/Wireline"

  addPrepaid(products:WlinePrepaid)
  {
    return this.http.post(this.url+"/addprepaid",products);
  }
  getPrepaid()
  {
    return this.http.get(this.url+"/getprepaid");
  }

  getsubproducts()
  {
    return this.http.get(this.url+"/getSubproducts")
  }
  addPostpaid(products:WlinePrepaid)
  {
    return this.http.post(this.url+"/addpostpaid",products);
  }

  getPostpaid()
  {
    return this.http.get(this.url+"/getpostpaid")
  }
}
