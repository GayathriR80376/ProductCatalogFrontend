import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminServiceService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  name:any=JSON.parse(localStorage.getItem('username')+'');
  // constructor(public params: RouterParams) { params.get('param'); }
  // constructor(private route: ActivatedRoute, private service: AdminServiceService) {
  //   this.route.paramMap.subscribe(params => {
  //      this.param = params.get('param');
  //     console.log(this.param); // Do something with the parameter
  //     // service.setUsername(this.param);
  //   });
  // }
  ngOnInit() {
    // this.service.setUsername(this.param);
    
    //   this.service.set('uname',this.param)
    
  }
   
}
