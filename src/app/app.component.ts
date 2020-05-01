import { Component } from '@angular/core';
import {  
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  faSearch = faSearch;

  constructor(private authService: AuthService) {
    this.authService.authState.subscribe(res => {
      console.log('Listening from app-component', res);
    }, err => {
      console.log(err);
    });

    const session = JSON.parse(sessionStorage.getItem('session'));
    this.authService.authState.next(session);
  }
}
