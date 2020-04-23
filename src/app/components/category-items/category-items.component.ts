import { Component, OnInit } from '@angular/core';

import {
  faAppleAlt,
  faShoppingBasket,
  faDrumstickBite,
  faCut,
  faBreadSlice,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.sass']
})
export class CategoryItemsComponent implements OnInit {

  faAppleAlt = faAppleAlt;
  faShoppingBasket = faShoppingBasket;
  faDrumstickBite = faDrumstickBite;
  faCut = faCut;
  faBreadSlice = faBreadSlice;
  faUtensils = faUtensils;

  constructor() { }

  ngOnInit(): void {
  }

}
