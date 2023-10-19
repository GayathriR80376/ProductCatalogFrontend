import { Component } from '@angular/core';
import { Subscription, subproducts } from 'src/app/module/wless-prepaid/WlessPrepaid';
import { wlineRequest } from 'src/app/module/wline';
import { SuperAdminService } from 'src/app/service/super-admin.service';
import { WirelessServiceService } from 'src/app/service/wireless-service.service';

@Component({
  selector: 'app-mobpostpaid',
  templateUrl: './mobpostpaid.component.html',
  styleUrls: ['./mobpostpaid.component.css']
})
export class MobpostpaidComponent {

  search:any="";
  products:any;
  subproduct=subproducts;
  subProductSelected:any[]=[];
  deleteProducts: any;
  editProducts: any;
  an:any=JSON.parse(localStorage.getItem('username')+'');;
  constructor(private wlessService:WirelessServiceService,private sService:SuperAdminService)
  {
   
   this.wlessService.getPostpaid().subscribe((pro)=>{this.products=pro});
  }


  getCheckboxValues() {
    const checkBoxes = document.querySelectorAll('input[id=inlineCheckbox1]:checked');
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

      // this.subProductSelected=this.getCheckboxValues();
    

  // for(let i = 0; i < this.subProductSelected.length; i++) {
  //   if(this.subProductSelected[i]=="undefined")
  //   {
  //   console.log(this.subProductSelected[i]);
  //   this.subProductSelected.splice(this.subProductSelected[i]);
  //   }
  
  // }

    }


    
  
  // [new Subscription("Amazon"),new Subscription("netflix")]

  // ngOnInit()
  //  {
  //   this.an= this.eservice.getUsername();
  //   // this.service.getsubproducts().subscribe((pro)=>{this.subproduct=pro})
    
  // }
//   onsubmit()
//  {
  
//   this.value=this.getCheckboxValues();
//   this.list=new WlinePrepaid(this.pv,this.pval,this.speed,this.td,this.voi,this.subProductSelected,[this.others],this.category,this.an,'Not-Approved');
//   this.valid=true;
//   this.service.addPrepaid(this.list).subscribe();
  
//  }
 filterDeleteProducts(prod:any)
 {
  return this.products.filter((pro: { id: any; })=>pro.id==prod);
 }
 deletenow(proD:any)
 {

  // this.deleteProducts=proD;
  // this.deleteProducts=this.filterDeleteProducts(proD);
  this.sService.deleteWirelessPostpaid(proD).subscribe();
 }
    
 editNow(pedit:any)
 {
  this.editProducts=this.products.filter((pro: { id: any; })=>pro.id==pedit);
    // this.editProducts=prolist;
 }
 onEditsubmit(pro:any)
 {
//  {this.subProductSelected=this.getCheckboxValues(); 
  // pro.subscriptions=this.subProductSelected;
  pro.subscriptions=this.getCheckboxValues();

  console.log(pro);
  this.sService.editWirelessPostpaid(pro).subscribe();
 }

}
