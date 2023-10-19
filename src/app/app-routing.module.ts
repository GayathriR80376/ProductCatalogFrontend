import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './login-page/admin-page/admin-page.component';
import { WirelineProductsComponent } from './login-page/admin-page/wireline-products/wireline-products.component';
import { WirelessProductsComponent } from './login-page/admin-page/wireless-products/wireless-products.component';
import { BusinessComponent } from './login-page/admin-page/business/business.component';
import { WLavailableplansComponent } from './login-page/admin-page/wireless-products/wlavailableplans/wlavailableplans.component';
import { MobpostpaidComponent } from './login-page/admin-page/wireless-products/wlavailableplans/mobpostpaid/mobpostpaid.component';
import { MobPrepaidComponent } from './login-page/admin-page/wireless-products/wlavailableplans/mob-prepaid/mob-prepaid.component';
import { AddNewWlessplansComponent } from './login-page/admin-page/wireless-products/add-new-wlessplans/add-new-wlessplans.component';
import { MobAddPostpaidComponent } from './login-page/admin-page/wireless-products/add-new-wlessplans/mob-add-postpaid/mob-add-postpaid.component';
import { MobAddPrepaidComponent } from './login-page/admin-page/wireless-products/add-new-wlessplans/mob-add-prepaid/mob-add-prepaid.component';
import { WlineavailableplansComponent } from './login-page/admin-page/wireline-products/wlineavailableplans/wlineavailableplans.component';
import { WlinePostpaidComponent } from './login-page/admin-page/wireline-products/wlineavailableplans/wline-postpaid/wline-postpaid.component';
import { WlineprepaidComponent } from './login-page/admin-page/wireline-products/wlineavailableplans/wlineprepaid/wlineprepaid.component';
import { AddnewwlineplansComponent } from './login-page/admin-page/wireline-products/addnewwlineplans/addnewwlineplans.component';
import { AddwlinepostpaidComponent } from './login-page/admin-page/wireline-products/addnewwlineplans/addwlinepostpaid/addwlinepostpaid.component';
import { AddwlineprepaidComponent } from './login-page/admin-page/wireline-products/addnewwlineplans/addwlineprepaid/addwlineprepaid.component';
import { SuperAdminComponent } from './login-page/super-admin/super-admin.component';
import { AddBussPlanComponent } from './login-page/admin-page/business/add-buss-plan/add-buss-plan.component';
import { AdminslistComponent } from './login-page/super-admin/adminslist/adminslist.component';
import { ProductQueueComponent } from './login-page/super-admin/product-queue/product-queue.component';
import { UseridValidateComponent } from './login-page/userid-validate/userid-validate.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path:"",
    component:LoginPageComponent
  },
  {
     path:"gotologin",
     component:LoginPageComponent
  },
  {
    path:"adminPage",
    component:AdminPageComponent
  },
  {
   path:"logout",
   component:LogoutComponent
  },
  {
    path:"useridValidate",
    component:UseridValidateComponent
  },
  {
    path:"wireline",
    component:WirelineProductsComponent
  },
  {
    path:"wireless",
    component:WirelessProductsComponent
  },
  {
    path:"business",
    component:BusinessComponent
  },
  {
    path:"WLessexistingPlans",
    component:WLavailableplansComponent
  },
  {
    path:"postpaid",
    component:MobpostpaidComponent
  },
  {
    path:"prepaid",
    component:MobPrepaidComponent
  },
  {
    path:"addWLessPlans",
    component:AddNewWlessplansComponent
  },
  {
    path:"addMobPostpaid",
    component:MobAddPostpaidComponent
  },
  {
    path:"addMobPrepaid",
    component:MobAddPrepaidComponent
  },
  {
    path:"WLineexistingPlans",
    component:WlineavailableplansComponent
  },
  {
    path:"wlinepostpaid",
    component:WlinePostpaidComponent
  },
  {
    path:"wlineprepaid",
    component:WlineprepaidComponent
  },
  {
    path:"addWLinePlans",
    component:AddnewwlineplansComponent
  },
  {
    path:"addwlinePostpaid",
    component:AddwlinepostpaidComponent
  },
  {
    path:"addwlinePrepaid",
    component:AddwlineprepaidComponent
  },
  {
    path:"SuperAdminHome",
    component:SuperAdminComponent
  },
  {
    path:"addBusinessPlans",
    component:AddBussPlanComponent
  },
  {
    path:"Adminslist",
    component:AdminslistComponent
  },
  {
    path:"ProductQueue",
    component:ProductQueueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
