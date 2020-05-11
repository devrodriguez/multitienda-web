import { Component } from '@angular/core';
import {  
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';

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

  constructor(private authService: AuthService) {
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

  findStores(evt, storeItems) {
    if (evt.key === 'Enter') {
      storeItems.findStores(this.latitude, this.longitude, this.query);
    }
  }
}
