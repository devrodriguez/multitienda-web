import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../interfaces/customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get(`${environment.apiHost}/api/customers`);
  }

  createCustomer(customer: Customer) {
    return this.http.post(`${environment.apiHost}/api/customers`, customer);
  }
}
