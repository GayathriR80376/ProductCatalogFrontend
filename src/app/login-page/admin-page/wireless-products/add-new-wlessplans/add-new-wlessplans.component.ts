import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-wlessplans',
  templateUrl: './add-new-wlessplans.component.html',
  styleUrls: ['./add-new-wlessplans.component.css']
})
export class AddNewWlessplansComponent {
choice:any;
choices(ch:any)
{
 if(ch=='prepaid')
 {
  this.choice='prepaid';
 }
 if(ch=='postpaid')
 {
  this.choice='postpaid';
 }
}
}
