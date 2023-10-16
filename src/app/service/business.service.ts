import { Injectable } from '@angular/core';
import { bList, business } from '../module/business';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
url:string="http://localhost:9093/business"
  constructor(private http:HttpClient) { }
  list=bList;

  addBusinessPlan(ppro:business)
  {
    this.list.unshift(ppro);
    console.log(ppro);
    console.log(this.list);

    return this.http.post(this.url+"/addplan",ppro);
    
  }
  getBusinessPlans()
  {
    return this.http.get("http://localhost:9093/business/getplan");
  }
}
