import { Component } from '@angular/core';
import {
  faAppleAlt,
  faCut,
  faDrumstickBite,
  faAddressBook,
  faAddressCard,
  faBreadSlice,
  faUtensils,
  faShoppingBasket,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'multitienda-web';


  faAppleAlt = faAppleAlt;
  faCut = faCut;
  faDrumstickBite = faDrumstickBite;
  faAddressBook = faAddressBook;
  faAddressCard = faAddressCard;
  faBreadSlice = faBreadSlice;
  faUtensils = faUtensils;
  faShoppingBasket = faShoppingBasket;
  faSearch = faSearch;
}
