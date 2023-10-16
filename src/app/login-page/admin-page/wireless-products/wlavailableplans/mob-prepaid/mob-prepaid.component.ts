import { Component } from '@angular/core';
import { WlessPrepaid} from 'src/app/module/wless-prepaid/WlessPrepaid';
import { WirelessServiceService } from 'src/app/service/wireless-service.service';

@Component({
  selector: 'app-mob-prepaid',
  templateUrl: './mob-prepaid.component.html',
  styleUrls: ['./mob-prepaid.component.css']
})
export class MobPrepaidComponent {
  products:WlessPrepaid[]=[];
 

  constructor(private wlessService:WirelessServiceService)
  {
   
   this.wlessService.getprepaid().subscribe((pro)=>{this.products=pro});
  }

}
