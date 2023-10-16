import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-wlineavailableplans',
  templateUrl: './wlineavailableplans.component.html',
  styleUrls: ['./wlineavailableplans.component.css']
})
export class WlineavailableplansComponent implements OnInit{
  username:any;
  constructor(private service:AdminServiceService){
    this.username=service.getUsername();
  }
  ngOnInit(){
    // const username = this.service.get('username');
    // this.username=username;
    // console.log(username)
  }
  

}
