import { Component } from '@angular/core';
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { StoreService } from './services/store.service';
import { Store } from './interfaces/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  faSearch = faSearch;

  latitude: number;
  longitude: number;
  query: string;
  kmDist: string = '1';
  stores: Store[] = [] as Store[];

  constructor(private authService: AuthService, private storeService: StoreService) {
    this.authService.authState.subscribe(res => {
      console.log('Listening from app-component', res);
    }, err => {
      console.log(err);
    });

    const session = JSON.parse(sessionStorage.getItem('session'));
    this.authService.authState.next(session);

    this.setCurrentGeolocation();
  }

  setCurrentGeolocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      }, err => {
        console.log(err);
      });
    }
  }

  findByInput(evt, storeItems) {
    if (evt.key === 'Enter') {
      storeItems.findStores(this.kmDist, this.latitude, this.longitude, this.query);
    }
  }

  findStores() {
    this.storeService.FindStore(this.kmDist, this.latitude, this.longitude, this.query)
    .subscribe((stores: Store[]) => {
      this.stores = stores ? stores : [];
    }, err => {
      console.error(err);
    });
  }

  selectCategory(catName: string) {
    this.storeService.FindStore(this.kmDist, this.latitude, this.longitude, catName)
    .subscribe((stores: Store[]) => {
      this.stores = stores ? stores : [];
    }, err => {
      console.error(err);
    });
  }
}
