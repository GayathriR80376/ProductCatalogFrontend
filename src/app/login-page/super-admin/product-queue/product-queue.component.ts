import { Component } from '@angular/core';
import { WlinePrepaidRequest } from 'src/app/module/wless-prepaid/WlessPrepaid';
import { wlineResponse } from 'src/app/module/wline';
import { BusinessService } from 'src/app/service/business.service';
import { OtpServiceService } from 'src/app/service/otp-service.service';
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
  business:any;

  list:any;
  statuses:any="Not-Approved"

  constructor(private service:SuperAdminService, private eservice:WirelessServiceService,private wservice:WlineserviceService,private bservice:BusinessService, private otpservice:OtpServiceService)
  {
    this.eservice.getPostpaid().subscribe((pro)=>{this.WPproducts=pro}); 
    this.eservice.getprepaid().subscribe((pro)=>{this.WPreproducts=pro});
    this.wservice.getPrepaid().subscribe((pro)=>{this.WLINEproducts=pro});
    this.wservice.getPostpaid().subscribe((pro)=>{this.WlinePro=pro});
    this.bservice.getBusinessPlans().subscribe((pro)=>{this.business=pro});
  }
  value:any[]=["Monthly","half yearly","Quartly","Annual"];

  

  onApprove(pro: wlineResponse)
  {
    this.list=pro;
    // this.list=new wlineResponse(this.list.id,this.pr,this.pv,this.tot,this.voi,this.sms,this.add,this.fam,this.sup,this.an,this.st)
    this.list.status="Approved";
    this.service.editWirelessPostpaid(this.list).subscribe();
  //  this.list=new wlineResponse(this.id,this.pr,this.pv,this.tot,this.voi,this.sms,this.add,this.fam,this.sup,this.an,this.st)

  this.otpservice.sendEmailToCustomer(this.list.id).subscribe(response => {

    console.log(response); // Handle the response as needed

    // Optionally, you can update the customer status or show a notification to the user

  });
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
     this.otpservice.sendEmailToCustomer(this.list.id).subscribe(response => {

      console.log(response); // Handle the response as needed
  
      // Optionally, you can update the customer status or show a notification to the user
  
    });
   this.service.editWirelinePostpaid(this.list).subscribe();
}
ondeleteWLinePost(pro:any)
{
  this.list=pro;
  this.service.deleteWirelinePostpaid(pro).subscribe();
}

onApproveBus(pro:any)
{
  this.list=pro;
     pro.status="Approved"
   this.service.editBusinessPlans(pro).subscribe();
}
ondeleteBus(pro:any)
{
  this.list=pro;
  this.service.deleteBusinessPlans(pro).subscribe();
}


}



