import { Component } from '@angular/core';
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
  constructor(private service:WlineserviceService)
  {
    this.service.getPrepaid().subscribe((pro)=>{this.products=pro});
  }

}
