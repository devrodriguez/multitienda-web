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

  FindStore(dist: string, lat: number, lon: number, q: string) {
    return this.http.get(`http://localhost:3001/api/stores/find?dist=${dist}&lat=${lat}&lon=${lon}&q=${q}`);
  }

  CreateStore(store: Store) {
    return this.http.post(`http://localhost:3001/api/stores`, store);
  }

  GetCategories() {
    return this.http.get(`http://localhost:3001/api/categories`);
  }
}
