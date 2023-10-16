import { Component } from '@angular/core';
import { wlineRequest } from 'src/app/module/wline';
import { WirelessServiceService } from 'src/app/service/wireless-service.service';

@Component({
  selector: 'app-mobpostpaid',
  templateUrl: './mobpostpaid.component.html',
  styleUrls: ['./mobpostpaid.component.css']
})
export class MobpostpaidComponent {

  products:any;
 

  constructor(private wlessService:WirelessServiceService)
  {
   
   this.wlessService.getPostpaid().subscribe((pro)=>{this.products=pro});
  }


}
