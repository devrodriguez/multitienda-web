import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../interfaces/store';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  GetStores() {
    return this.http.get(`${environment.apiHost}/api/stores`);
  }

  FindStore(dist: string, lat: number, lon: number, q: string) {
    return this.http.get(`${environment.apiHost}/api/stores/find?dist=${dist}&lat=${lat}&lon=${lon}&q=${q}`);
  }

  CreateStore(store: Store) {
    return this.http.post(`${environment.apiHost}/api/stores`, store);
  }

  GetCategories() {
    return this.http.get(`${environment.apiHost}/api/categories`);
  }
}
