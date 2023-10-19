import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtpServiceService {

  constructor(private http:HttpClient) { }
  private bpiUrl = 'http://localhost:9091/Wireline';

 

  sendEmailToCustomer(customerId: number): Observable<any> {

    return this.http.post(`${this.bpiUrl}/email/${customerId}`, null);

  }
}
