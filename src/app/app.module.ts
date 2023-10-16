import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './login-page/admin-page/admin-page.component';
import { WirelineProductsComponent } from './login-page/admin-page/wireline-products/wireline-products.component';
import { WirelessProductsComponent } from './login-page/admin-page/wireless-products/wireless-products.component';
import { BusinessComponent } from './login-page/admin-page/business/business.component';
import { WLavailableplansComponent } from './login-page/admin-page/wireless-products/wlavailableplans/wlavailableplans.component';
import { AddNewWlessplansComponent } from './login-page/admin-page/wireless-products/add-new-wlessplans/add-new-wlessplans.component';
import { MobPrepaidComponent } from './login-page/admin-page/wireless-products/wlavailableplans/mob-prepaid/mob-prepaid.component';
import { MobpostpaidComponent } from './login-page/admin-page/wireless-products/wlavailableplans/mobpostpaid/mobpostpaid.component';
import { MobAddPostpaidComponent } from './login-page/admin-page/wireless-products/add-new-wlessplans/mob-add-postpaid/mob-add-postpaid.component';
import { MobAddPrepaidComponent } from './login-page/admin-page/wireless-products/add-new-wlessplans/mob-add-prepaid/mob-add-prepaid.component';
import { WlineavailableplansComponent } from './login-page/admin-page/wireline-products/wlineavailableplans/wlineavailableplans.component';
import { WlinePostpaidComponent } from './login-page/admin-page/wireline-products/wlineavailableplans/wline-postpaid/wline-postpaid.component';
import { WlineprepaidComponent } from './login-page/admin-page/wireline-products/wlineavailableplans/wlineprepaid/wlineprepaid.component';
import { AddnewwlineplansComponent } from './login-page/admin-page/wireline-products/addnewwlineplans/addnewwlineplans.component';
import { AddwlinepostpaidComponent } from './login-page/admin-page/wireline-products/addnewwlineplans/addwlinepostpaid/addwlinepostpaid.component';
import { AddwlineprepaidComponent } from './login-page/admin-page/wireline-products/addnewwlineplans/addwlineprepaid/addwlineprepaid.component';
import { SuperAdminComponent } from './login-page/super-admin/super-admin.component';
import { FilterWlineCategoryPipe } from './pipe/filter-wline-category.pipe';
import { AdminServiceService } from './service/admin-service.service';
import { AddBussPlanComponent } from './login-page/admin-page/business/add-buss-plan/add-buss-plan.component';
import { AdminslistComponent } from './login-page/super-admin/adminslist/adminslist.component';
import { ProductQueueComponent } from './login-page/super-admin/product-queue/product-queue.component';
import { StatusfilerPipe } from './pipe/statusfiler.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AdminPageComponent,
    WirelineProductsComponent,
    WirelessProductsComponent,
    BusinessComponent,
    WLavailableplansComponent,
    AddNewWlessplansComponent,
    MobPrepaidComponent,
    MobpostpaidComponent,
    MobAddPostpaidComponent,
    MobAddPrepaidComponent,
    WlineavailableplansComponent,
    WlinePostpaidComponent,
    WlineprepaidComponent,
    AddnewwlineplansComponent,
    AddwlinepostpaidComponent,
    AddwlineprepaidComponent,
    SuperAdminComponent,
    FilterWlineCategoryPipe,
    AddBussPlanComponent,
    AdminslistComponent,
    ProductQueueComponent,
    StatusfilerPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
