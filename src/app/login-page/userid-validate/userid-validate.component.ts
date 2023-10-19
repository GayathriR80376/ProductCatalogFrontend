import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userid-validate',
  templateUrl: './userid-validate.component.html',
  styleUrls: ['./userid-validate.component.css']
})
export class UseridValidateComponent {
  uname:any;
   userid=JSON.parse(localStorage.getItem('userid')+'');
   constructor(private router:Router)
   {

   }
   onsubmit()
   {
    if(this.userid==this.uname)
    {
      this.router.navigate(["/adminPage"]);
   
   console.log(this.userid);
   console.log(this.uname);
    }
   }


}
