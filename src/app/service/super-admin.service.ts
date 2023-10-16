import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {
  
url:string="http://localhost:9094/SuperAdmin"
constructor(private http:HttpClient) { }

getAdmins()
{
  return this.http.get(this.url+"/getAdmins");
}

editWirelessPostpaid(products:any)
{
  return this.http.post("http://localhost:9090/Wireless/editWlessPostPaid",products)
}
deleteWirelessPostpaid(products:any)
{
  return this.http.post("http://localhost:9090/Wireless/deleteWlessPostPaid",products)
} 
editWirelessPrepaid(products:any)
{
  return this.http.post("http://localhost:9090/Wireless/editWlessPrePaid",products)
}
deleteWirelessPrepaid(products:any)
{
  return this.http.post("http://localhost:9090/Wireless/deleteWlessPrePaid",products)
} 




editWirelinePrepaid(products:any)
{
  return this.http.post("http://localhost:9091/Wireline/editWlinePrePaid",products)
}
deleteWirelinePrepaid(products:any)
{
  return this.http.post("http://localhost:9091/Wireline/deleteWlinePrePaid",products)
} 
editWirelinePostpaid(products:any)
{
  return this.http.post("http://localhost:9091/Wireline/editWlinePostPaid",products)
}
deleteWirelinePostpaid(products:any)
{
  return this.http.post("http://localhost:9091/Wireline/deleteWlinePostPaid",products)
} 

}
