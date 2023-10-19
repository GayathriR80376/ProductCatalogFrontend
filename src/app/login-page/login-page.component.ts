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
  valid:any[]=[];
  name:any;
  pass:any;
  email:any;
  username:any;
  approve:boolean=false;
  v:boolean=false;
  constructor(private service:AdminServiceService,private router:Router)
  {
    
  }
  
  datasubmitted(email:any,pass:any)
  {
    if( email=="superadmin@procat.in" &&pass=="superAdminProcat")
    {
      console.log("login sucess");

      this.router.navigate(['/SuperAdminHome']);
    }
    else{
      this.service.getAdmins(email,pass).subscribe(

        (response:any)=>{
          if(response.status==="success"){
            localStorage.setItem('currentUser', JSON.stringify(response));//object
            localStorage.setItem('password',JSON.stringify(response.credentials.passWord));//object attribute
            localStorage.setItem('username',JSON.stringify(response.credentials.userName));
            localStorage.setItem('email',JSON.stringify(response.credentials.email));
            localStorage.setItem('userid',JSON.stringify(response.credentials.userId));
            
          
      
           
      
            const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      
            const password=JSON.parse(localStorage.getItem('password')+'');
      
            const email=JSON.parse(localStorage.getItem('email')+'');
      
            const username=JSON.parse(localStorage.getItem('username')+'');
            const userid=JSON.parse(localStorage.getItem('userid')+'');

      
            console.log("local storage",storedUser);
      
            console.log("UserName",username);
      
            console.log("email",email);
            console.log("pass",password);

      
            console.log("id",userid);
           this.v=true;
           this.router.navigate(['/useridValidate']);
      
          }
      
          // else if (response.status === 'invalid') {
      
          //   this.loginError = 'Invalid email or password. Please try again.';
      
          //   this.cdr.detectChanges();
      
          // }
      
        },
      
        (error:any)=>
      
        {
      
      console.error('Login Failed:',error);
      
     
      
        }
      
        );



    
    }
  }
  login()
  {
    this.approve=true;
  }
 

}
