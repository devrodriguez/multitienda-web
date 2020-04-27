import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get(`http://localhost:3001/api/customers`);
  }

  createCustomer(customer: Customer) {
    return this.http.post(`http://localhost:3001/api/customers`, customer);
  }
}
