import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/interfaces/store';
import { StoreService } from 'src/app/services/store.service';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-register-store',
  templateUrl: './register-store.component.html',
  styleUrls: ['./register-store.component.sass']
})
export class RegisterStoreComponent implements OnInit {
  storeData: Store = {} as Store;
  categories: Category[] = [] as Category[];

  constructor(private storeService: StoreService) {
    this.storeData.String64Images = [];
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.storeService.GetCategories().subscribe((res: Category[]) => {
      this.categories = res;
    }, err => {
      console.log(err);
    });
  }

  processFile(image: any) {
    const files: File[] = image.files;

    for (const file of files) {
      const reader = new FileReader();
      reader.addEventListener('load', (event: any) => {
        this.storeData.String64Images.push(event.target.result);
      });

      reader.readAsDataURL(file);
    }
  }

  register() {
    this.storeService.CreateStore(this.storeData).subscribe(res => {
      this.storeData = {} as Store;
    }, err => {
      console.log(err);
    });
  }

  selectCategory(event: any) {
    this.storeData.Category = JSON.parse(event);
  }
}
