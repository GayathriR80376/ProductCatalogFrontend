import { Component } from '@angular/core';
import { WlinePrepaidRequest } from 'src/app/module/wless-prepaid/WlessPrepaid';
import { wlineResponse } from 'src/app/module/wline';
import { SuperAdminService } from 'src/app/service/super-admin.service';
import { WirelessServiceService } from 'src/app/service/wireless-service.service';
import { WlineserviceService } from 'src/app/service/wlineservice.service';

@Component({
  selector: 'app-product-queue',
  templateUrl: './product-queue.component.html',
  styleUrls: ['./product-queue.component.css']
})
export class ProductQueueComponent {


  WPproducts:any;
  WPreproducts:any;
  WLINEproducts:any;
  WlinePro:any;

  list:any;
  statuses:any="Not-Approved"

  constructor(private service:SuperAdminService, private eservice:WirelessServiceService,private wservice:WlineserviceService)
  {
    this.eservice.getPostpaid().subscribe((pro)=>{this.WPproducts=pro}); 
    this.eservice.getprepaid().subscribe((pro)=>{this.WPreproducts=pro});
    this.wservice.getPrepaid().subscribe((pro)=>{this.WLINEproducts=pro});
    this.wservice.getPostpaid().subscribe((pro)=>{this.WlinePro=pro});
  }
  
  onApprove(pro: wlineResponse)
  {
    this.list=pro;
    // this.list=new wlineResponse(this.list.id,this.pr,this.pv,this.tot,this.voi,this.sms,this.add,this.fam,this.sup,this.an,this.st)
    this.list.status="Approved";
    this.service.editWirelessPostpaid(this.list).subscribe();
  //  this.list=new wlineResponse(this.id,this.pr,this.pv,this.tot,this.voi,this.sms,this.add,this.fam,this.sup,this.an,this.st)
  }
  ondelete(pro:wlineResponse)
  {
    this.service.deleteWirelessPostpaid(pro).subscribe();
  }

  
  onApproveWPRE(pro:any)
  {
     this.list=pro;
     pro.status="Approved"
     this.service.editWirelessPrepaid(pro).subscribe();
  }
  ondeleteWPRE(pro:any)
  {
    this.list=pro;
    this.service.deleteWirelessPrepaid(pro).subscribe();
  }

// ---------------------wireline---------------------



onApproveWLinePRe(pro:WlinePrepaidRequest)
{
  this.list=pro;
     this.list.status="Approved"
   this.service.editWirelinePrepaid(this.list).subscribe();
}
ondeleteWLinePRe(pro:any)
{
  this.list=pro;
  this.service.deleteWirelinePrepaid(pro).subscribe();
}

onApproveWLinePost(pro:any)
{
  this.list=pro;
     this.list.status="Approved"
   this.service.editWirelinePostpaid(this.list).subscribe();
}
ondeleteWLinePost(pro:any)
{
  this.list=pro;
  this.service.deleteWirelinePostpaid(pro).subscribe();
}


}



