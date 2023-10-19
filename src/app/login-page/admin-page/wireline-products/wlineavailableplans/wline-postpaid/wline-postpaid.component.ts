import { Component } from '@angular/core';
import { Subscription, subproducts } from 'src/app/module/wless-prepaid/WlessPrepaid';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import { SuperAdminService } from 'src/app/service/super-admin.service';
import { WlineserviceService } from 'src/app/service/wlineservice.service';

@Component({
  selector: 'app-wline-postpaid',
  templateUrl: './wline-postpaid.component.html',
  styleUrls: ['./wline-postpaid.component.css']
})
export class WlinePostpaidComponent {
  editProducts:any[]=[];
  subproduct=subproducts;
  subProductSelected:Subscription[]=[];
  subProductS:any[]=[];
  an:any=JSON.parse(localStorage.getItem('username')+'');
  deleteProducts: any;
  products:any;
  cat1:any="Postpaid Plans"
  search:any="";
  valid:any=false;
  
  constructor(private service:WlineserviceService,private eservice:AdminServiceService,private sService:SuperAdminService)
  {
    this.service.getPostpaid().subscribe((pro)=>{this.products=pro});
    // this.products.filter(pro)
  }
   onsearch()
   {
    this.valid=true;
   }
      
 editNow(pedit:any)
 {
  this.editProducts=this.products.filter((pro: { id: any; })=>pro.id==pedit);
    // this.editProducts=prolist;
 }
 onEditsubmit(pro:any)
 { pro.subscription=this.subProductSelected;
  console.log(pro);
  this.sService.editWirelinePostpaid(pro).subscribe();
 }
 deletenow(proD:any)
 {

  // this.deleteProducts=proD;
  // this.deleteProducts=this.filterDeleteProducts(proD);
  this.sService.deleteWirelinePostpaid(proD).subscribe();
 }
  
 getCheckboxValues() {
  const checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
  const values = Array.from(checkBoxes).map(element => (element as HTMLInputElement).value);
  return values;
  console.log(values);
}

// checkedSubProduyct(subP:any)
// {
//   for(let i = 0; i < this.subProductSelected.length; i++) {
//     if(this.subProductSelected[i]!=subP)
//     {
//     console.log(this.subProductSelected[i]);
//     this.subProductSelected.unshift(subP)
//     }
//   }
    
checkedSubProduct(subP: any) {
  // Check if subP is not in the array
  if (!this.subProductSelected.includes(subP)) {
    // Remove any existing occurrences of subP
    this.subProductSelected = this.subProductSelected.filter(item => item !== subP);

    // Add subP to the beginning of the array
    this.subProductSelected.unshift(subP);

    // Optionally, you might want to limit the length of the array
   
    }
  }
}
 
  // this.subProductSelected=this.getCheckboxValues();
 





