import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WlessPrepaid, WlessPrepaidRequest } from '../module/wless-prepaid/WlessPrepaid';
import { wlineRequest } from '../module/wline';

@Injectable({
  providedIn: 'root'
})
export class WirelessServiceService {

  constructor(private httpclient:HttpClient) { }

  url:string="http://localhost:9090/Wireless";

  getprepaid():Observable<any>
  {
   return this.httpclient.get(this.url+"/getPrepaid");
  }

  postPrepaid(products:WlessPrepaidRequest)
  {
    return this.httpclient.post(this.url+"/addprepaid",products);
  }

  postPostpaid(products:wlineRequest)
  {
    return this.httpclient.post(this.url+"/addPostpaid",products)
  }
  getPostpaid()
  {
    return this.httpclient.get(this.url+"/getPostpaid")
  }
  editPostpaid(products:any)
  {
    return this.httpclient.post(this.url+"/editWlessPostPaid",products)
  }
}
