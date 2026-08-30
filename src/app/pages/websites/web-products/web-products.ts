import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../service/product-service/product-service';

@Component({
  selector: 'app-customer-products',
  imports: [CommonModule],
  templateUrl: './web-products.html',
  styleUrl: './web-products.css',
})
export class WebProducts  implements OnInit {

  productList: any[] = [];
  categoryList: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
  }

  getProduct() {
    this.productService.getAllProducts().subscribe((response: any) => {
      this.productList = response.data;
    });
  }

  getCategory(){
    this .productService.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    })
  }

}

