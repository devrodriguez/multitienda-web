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

  categories: any[] = [
    {
      name: 'Frutas',
      icon: faAppleAlt,
      class: 'bg-success'
    },
    {
      name: 'Mercado',
      icon: faShoppingBasket,
      class: 'bg-info'
    },
    {
      name: 'Carne',
      icon: faDrumstickBite,
      class: 'bg-danger'
    },
    {
      name: 'Peluqueria',
      icon: faCut,
      class: 'bg-primary'
    },
    {
      name: 'Panaderia',
      icon: faBreadSlice,
      class: 'bg-warning'
    },
    {
      name: 'Restaurante',
      icon: faUtensils,
      class: 'bg-secondary'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
