import { Component } from '@angular/core';
import { WlineserviceService } from 'src/app/service/wlineservice.service';

@Component({
  selector: 'app-wline-postpaid',
  templateUrl: './wline-postpaid.component.html',
  styleUrls: ['./wline-postpaid.component.css']
})
export class WlinePostpaidComponent {

  products:any;
  constructor(private service:WlineserviceService)
  {
    this.service.getPostpaid().subscribe((pro)=>{this.products=pro});
  }

}
