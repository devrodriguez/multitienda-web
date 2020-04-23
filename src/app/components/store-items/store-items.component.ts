import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.sass']
})
export class StoreItemsComponent implements OnInit {

  stores: any[] = [];

  constructor(private storeService: StoreService) {
    this.readStores();
  }

  ngOnInit(): void {
  }

  readStores() {
    this.storeService.GetStores().subscribe(res => {
      this.stores = res as [];
    }, err => {
      console.log(err);
    });
  }

  getImage(images: any) {
    console.log(images)
    if(images) {
      return images[0]
    }
    return 'https://wiki.teamfortress.com/w/images/thumb/2/2d/TF2_Beta_logo.png/350px-TF2_Beta_logo.png';
  }

}
