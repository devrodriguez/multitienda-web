import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = new BehaviorSubject<Customer>(null);

  constructor(private http: HttpClient) { }

  signIn(customer: Customer): Observable<any> {
    return this.http.post(`${environment.apiHost}/api/signin`, customer);
  }

  signOut() {
    sessionStorage.removeItem('sessionToken');
  }
}
