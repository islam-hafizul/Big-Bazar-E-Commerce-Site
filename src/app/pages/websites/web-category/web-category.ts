import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/product-service/product-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-category',
  imports: [CommonModule],
  templateUrl: './web-category.html',
  styleUrl: './web-category.css',
})
export class WebCategory {

  activeCategoryId: number = 0;
  productList: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService){
    this.activatedRoute.params.subscribe((res: any) => {
      this.activeCategoryId = res.id;
      this.loadProducts();
    })
  }

  loadProducts(){
    this.productService.getAllProductsByCategoryId(this.activeCategoryId).subscribe((res: any) => {
      this.productList = res.data;
    })
  }
}
