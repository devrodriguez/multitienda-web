import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  GetStores() {
    return this.http.get(`http://localhost:3001/api/stores`);
  }
}
