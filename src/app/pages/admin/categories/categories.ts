import { Component } from '@angular/core';
import { ProductService } from '../../../service/product-service/product-service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {

  products$: Observable<any>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getCategory().pipe(
      map((response: any) => response.data)
    );
  }

  getAllCategories() {
  } 
}
