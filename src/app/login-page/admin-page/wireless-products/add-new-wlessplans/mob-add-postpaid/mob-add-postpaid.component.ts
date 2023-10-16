import { Component } from '@angular/core';
import { wlineRequest } from 'src/app/module/wline';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import { WirelessServiceService } from 'src/app/service/wireless-service.service';
import { WirelineServiceService } from 'src/app/service/wireline-service.service';

@Component({
  selector: 'app-mob-add-postpaid',
  templateUrl: './mob-add-postpaid.component.html',
  styleUrls: ['./mob-add-postpaid.component.css']
})
export class MobAddPostpaidComponent {
 
  pvu:any;
  pval:any;
  tot:any;
  voi:any;
  sms:any;
  add:any;
  fdata:any;
  subproducts:String[]=[];
  an:any;
  status:String="Not-Approved"
  products :any;
 
 constructor(private service:WirelessServiceService,private aservice:AdminServiceService)
 {
  // this.aservice.getUsername();
 }
 

  getCheckboxValues() {
    const checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    const values = Array.from(checkBoxes).map(element => (element as HTMLInputElement).value);
    return values;
    console.log(values);
  }
  onsubmit()
 {
 
  this.products=new wlineRequest(this.pvu,this.pval,this.tot,this.voi,this.sms,this.add,this.fdata,this.getCheckboxValues(),this.aservice.getUsername(),this.status);
  this.service.postPostpaid(this.products).subscribe();
 }

}
