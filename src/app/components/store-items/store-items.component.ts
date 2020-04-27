import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/interfaces/store';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.sass']
})
export class StoreItemsComponent implements OnInit {

  stores: Store[] = [] as Store[];

  constructor(private storeService: StoreService) {
    this.readStores();
  }

  ngOnInit(): void {
    this.readStores();
  }

  readStores() {
    this.storeService.GetStores().subscribe((res: Store[]) => {
      this.stores = res;
    }, err => {
      console.log(err);
    });
  }

  getImage(image: any) {
    if (image) {
      return `http://localhost:3001/s/${image[0]}`
    }

    return `http://localhost:3001/s/stores/mt1.png`
  }

}
