import { Component, OnInit } from '@angular/core';
import { Subscription, WlinePrepaid, subproducts } from 'src/app/module/wless-prepaid/WlessPrepaid';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import { WlineserviceService } from 'src/app/service/wlineservice.service';

@Component({
  selector: 'app-addwlineprepaid',
  templateUrl: './addwlineprepaid.component.html',
  styleUrls: ['./addwlineprepaid.component.css']
})
export class AddwlineprepaidComponent implements OnInit {
  pv:any;
  pval:any;
  td:any;
  speed:any;
  voi:any;
  sms:any;
  others:any;
  category:any;
  

  an:any=JSON.parse(localStorage.getItem('username')+'');
  valid=false
  list:any;
  value:String[]=[];
  subproduct=subproducts;

  subProductSelected:Subscription[]=[];
  
  getCheckboxValues() {
    const checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    const values = Array.from(checkBoxes).map(element => (element as HTMLInputElement).value);
    return values;
    console.log(values);
  }

  checkedSubProduyct(subP:any)
  {
    this.subProductSelected.unshift(subP)
  }
  
  // [new Subscription("Amazon"),new Subscription("netflix")]
  constructor(private service:WlineserviceService, private eservice:AdminServiceService)
  {
    
  }
  ngOnInit()
   {
    // this.an= this.eservice.getUsername();
    // this.service.getsubproducts().subscribe((pro)=>{this.subproduct=pro})
    
  }
  onsubmit()
 {
  
  this.value=this.getCheckboxValues();
  this.list=new WlinePrepaid(this.pv,this.pval,this.speed,this.td,this.voi,this.subProductSelected,[this.others],this.category,this.an,'Not-Approved');
  this.valid=true;
  this.service.addPrepaid(this.list).subscribe();
  
 }
}

 