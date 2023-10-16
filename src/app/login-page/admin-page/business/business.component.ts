import { Component } from '@angular/core';
import { BusinessService } from 'src/app/service/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {

  products:any;
  constructor(private service:BusinessService)
  {
    this.service.getBusinessPlans().subscribe((pro)=>{this.products=pro})
    // this.service.getPrepaid().subscribe((pro)=>{this.products=pro});
  }

  toggleExpansion(product:any, feature:any) {
    if (!this.expandedFeatures[product]) {
      this.expandedFeatures[product] = {};
    }
    this.expandedFeatures[product][feature] = !this.expandedFeatures[product][feature];
  }
  
  isExpanded(product:any, feature:any) {
    return this.expandedFeatures[product] && this.expandedFeatures[product][feature];
  }
  
  expandedFeatures: { [product: string]: { [feature: string]: boolean } } = {};

  
   
  }
  


