import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../service/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  title = 'SamplePC';
  valid:boolean=false;
  name:any;
  pass:any;
  email:any;
  username:any;
  constructor(private service:AdminServiceService,private router:Router)
  {
    
  }
  
  datasubmitted(name:any,email:any,pass:any)
  {
    if(name=="SuperAdmin" && email=="superadmin@procat.in" &&pass=="superAdminProcat")
    {
      console.log("login sucess");

      this.router.navigate(['/SuperAdminHome']);
    }
    else{
    this.valid= this.service.adminValidation(name,email,pass);
    // this.service.setUsername(name);
    
    
    if(this.valid)
    {
      this.router.navigate(['/adminPage' ,{param: name}]);
      // this.router.parent.navigate(['/PreviousDetailsCmp' {value1:abc, value2:xyz}]);
      // this.router.navigate(['./NextCmp', {param: 3}])
    }
    }
  }

  // constructor(private sessionService: SessionService) { }

  // ngOnInit() {
  //   this.sessionService.set('username', 'john_doe');
  //   const username = this.sessionService.get('username');
  //   console.log(username); // Output: john_doe
  // }

}
