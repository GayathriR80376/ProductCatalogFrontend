import { Component } from '@angular/core';
import { SuperAdminService } from 'src/app/service/super-admin.service';

@Component({
  selector: 'app-adminslist',
  templateUrl: './adminslist.component.html',
  styleUrls: ['./adminslist.component.css']
})
export class AdminslistComponent {
  list:any;

  constructor(private service:SuperAdminService)
  {
    this.service.getAdmins().subscribe((list)=>{this.list=list});
  }



}
