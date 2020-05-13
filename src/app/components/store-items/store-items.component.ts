import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/interfaces/store';

import {
  faPhone,
  faAddressBook,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.sass']
})
export class StoreItemsComponent implements OnInit {
  @Input() stores: Store[] = [];
  faInfoCircle = faInfoCircle;
  faPhone = faPhone;
  faAddressBook = faAddressBook;

  // stores: Store[] = [] as Store[];

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {}

  readStores() {
    this.storeService.GetStores().subscribe((res: Store[]) => {
      this.stores = res;
    }, err => {
      console.log(err);
    });
  }

  findStores(lat: number, lon: number, q: string) {
    this.storeService.FindStore('2000000', lat, lon, q).subscribe((stores: Store[]) => {
      this.stores = stores ? stores : [];
    }, err => {
      console.error(err);
    });
  }

  getImage(image: any) {
    if (image) {
      return `${environment.apiHost}/s/${image[0]}`;
    }

    return `${environment.apiHost}/s/stores/mt1.png`;
  }

}
