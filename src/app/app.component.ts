import { Component } from '@angular/core';
import {  
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  faSearch = faSearch;
}
