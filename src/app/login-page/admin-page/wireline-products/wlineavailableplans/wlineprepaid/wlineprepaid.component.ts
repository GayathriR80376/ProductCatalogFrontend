import { Component } from '@angular/core';
import { Subscription, WlinePrepaid, subproducts } from 'src/app/module/wless-prepaid/WlessPrepaid';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import { SuperAdminService } from 'src/app/service/super-admin.service';
import { WlineserviceService } from 'src/app/service/wlineservice.service';

@Component({
  selector: 'app-wlineprepaid',
  templateUrl: './wlineprepaid.component.html',
  styleUrls: ['./wlineprepaid.component.css']
})
export class WlineprepaidComponent {
  products:any;
  cat1:any="Prepaid Plans";
  cat2:any="Monthly";
  pv:any;
  pval:any;
  td:any;
  speed:any;
  voi:any;
  sms:any;
  others:any;
  category:any;
  editProducts:any[]=[];
  search:any="";
  
  an:any=JSON.parse(localStorage.getItem('username')+'');
  valid=false
  list:any;
  value:String[]=[];
  subproduct=subproducts;
  subProductSelected:Subscription[]=[];
  deleteProducts: any;
  constructor(private service:WlineserviceService, private eservice:AdminServiceService,private sService:SuperAdminService)
  {
    this.service.getPrepaid().subscribe((pro)=>{this.products=pro});
    console.log(this.an)
  }



  getCheckboxValues() {
    const checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    const values = Array.from(checkBoxes).map(element => (element as HTMLInputElement).value);
    return values;
    console.log(values);
  }

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
  
  // [new Subscription("Amazon"),new Subscription("netflix")]

  ngOnInit()
   {
    this.an= this.eservice.getUsername();
    // this.service.getsubproducts().subscribe((pro)=>{this.subproduct=pro})
    
  }
  onsubmit()
 {
  
  this.value=this.getCheckboxValues();
  this.list=new WlinePrepaid(this.pv,this.pval,this.speed,this.td,this.voi,this.subProductSelected,[this.others],this.category,this.an,'Not-Approved');
  this.valid=true;
  this.service.addPrepaid(this.list).subscribe();
  
 }
 filterDeleteProducts(prod:any)
 {
  return this.products.filter((pro: { id: any; })=>pro.id==prod);
 }
 deletenow(proD:any)
 {

  // this.deleteProducts=proD;
  // this.deleteProducts=this.filterDeleteProducts(proD);
  this.sService.deleteWirelinePrepaid(proD).subscribe();
 }
    
 editNow(pedit:any)
 {
  this.editProducts=this.products.filter((pro: { id: any; })=>pro.id==pedit);
    // this.editProducts=prolist;
 }
 onEditsubmit(pro:any)
 { pro.subscription=this.subProductSelected;
  console.log(pro);
  this.sService.editWirelinePrepaid(pro).subscribe();
 }
}
