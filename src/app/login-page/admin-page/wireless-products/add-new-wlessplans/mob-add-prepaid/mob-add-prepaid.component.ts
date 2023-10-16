import { Component } from '@angular/core';
import { WlessPrepaid, WlessPrepaidRequest } from 'src/app/module/wless-prepaid/WlessPrepaid';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import { WirelessServiceService } from 'src/app/service/wireless-service.service';
@Component({
  selector: 'app-mob-add-prepaid',
  templateUrl: './mob-add-prepaid.component.html',
  styleUrls: ['./mob-add-prepaid.component.css']
})

export class MobAddPrepaidComponent {
  id:any;
  pvu:any;
  pval:any;
  tot:any;
  dpd:any;
  voi:any;
  sms:any;
  subproducts:String[]=[];
  an:any;
  status:String="Not-Approved"
  products :any;
 
 constructor(private service:WirelessServiceService,private aservice:AdminServiceService)
 {
  this.aservice.getUsername();
 }
 

  getCheckboxValues() {
    const checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    const values = Array.from(checkBoxes).map(element => (element as HTMLInputElement).value);
    return values;
    console.log(values);
  }
  onsubmit()
 {
 
  this.products=new WlessPrepaidRequest(this.pvu,this.pval,this.tot,this.dpd,this.voi,this.sms,this.getCheckboxValues(),this.aservice.getUsername(),this.status);
  this.service.postPrepaid(this.products).subscribe();
 }
}

//  push(sup:String)
//  {
//   this.subproducts.unshift(sup);
//  }
 

//  onsubmit(sub:String[])
//  {
//    this.products=new WlessPrepaid(0,this.pvu,this.pval,this.tot,this.dpd,this.voi,this.sms,this.subproducts,this.an);
//  }



// const checkBoxes = document.getElementsByName('checkBox');

// const checkedArray = (checkboxes: NodeList): HTMLElement[] => {
//     let resultArray: HTMLElement[] = Array.prototype.slice.call(checkboxes).filter(checkbox => checkbox.checked)

//     return resultArray
// }
// checkedArray(checkBoxes)

// const checkBoxese = document.querySelectorAll('input[type=checkbox]:checked');

// let values = Array.prototype.slice.call(checkBoxese).map(element => element.value);

// console.log(values);