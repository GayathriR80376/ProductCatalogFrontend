import { Component, OnInit } from '@angular/core';
import {bList, business} from 'src/app/module/business';
import { BusinessService } from 'src/app/service/business.service';

@Component({
  selector: 'app-add-buss-plan',
  templateUrl: './add-buss-plan.component.html',
  styleUrls: ['./add-buss-plan.component.css']
})
export class AddBussPlanComponent implements OnInit{
  plan:any=0;
  du:any;
  sp:any;
  sip:any;
  ipc:any;
  pr:any;
  al:any;
  ml:any;
  bg:any;
  vg:any;
  offer:any;
  an:any;
  pMon:any;pHalf:any;pQuar:any;pYear:any;
  dHalf:any;dQuar:any;dYear:any;
  bllist=bList;
  list:any;
  products: any;
  constructor(private service:BusinessService){
  
  }
  ngOnInit() {
    this.pMon=this.plan;
   this.pQuar=this.plan*3;
   this.pHalf=this.plan*6;
   this.pYear=this.plan*12;
  }
  onsubmit()
  {
    this.products=new business(this.plan,[this.du,this.sp,this.sip],[this.ipc,this.pr],[this.al],[this.ml],[this.bg,this.vg],[this.dHalf,this.dQuar,this.dYear],[this.pMon,this.pQuar,this.pHalf,this.pYear],this.offer,this.an,"Not-Approved")
    this.bllist.push(this.products);
    this.service.addBusinessPlan(this.products).subscribe((pro=>{this.list=pro}));
    // this.list=this.service.getBusinessPlans();
  }

}
