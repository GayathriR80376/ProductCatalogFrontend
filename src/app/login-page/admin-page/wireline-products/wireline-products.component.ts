import { Component } from '@angular/core';
import { AdminServiceService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-wireline-products',
  templateUrl: './wireline-products.component.html',
  styleUrls: ['./wireline-products.component.css']
})
export class WirelineProductsComponent {
  username:any;
  constructor(private service:AdminServiceService)
  {
     this.username= service.getUsername();
  }

}
