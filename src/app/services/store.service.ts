import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../interfaces/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  GetStores() {
    return this.http.get(`http://localhost:3001/api/stores`);
  }

  CreateStore(store: Store) {
    return this.http.post(`http://localhost:3001/api/stores`, store);
  }

  GetCategories() {
    return this.http.get(`http://localhost:3001/api/categories`);
  }
}
