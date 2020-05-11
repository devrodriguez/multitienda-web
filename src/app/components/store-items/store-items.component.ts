import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/interfaces/store';

import {
  faPhone,
  faAddressBook,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.sass']
})
export class StoreItemsComponent implements OnInit {
  faInfoCircle = faInfoCircle;
  faPhone = faPhone;
  faAddressBook = faAddressBook;

  stores: Store[] = [] as Store[];

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
    this.storeService.FindStore('2000000', lat, lon, q).subscribe((res: Store[]) => {
      this.stores = res;
    }, err => {
      console.error(err);
    })
  }

  getImage(image: any) {
    if (image) {
      return `http://localhost:3001/s/${image[0]}`
    }

    return `http://localhost:3001/s/stores/mt1.png`
  }

}
