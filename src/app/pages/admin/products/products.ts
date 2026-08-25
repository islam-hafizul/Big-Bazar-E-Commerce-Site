import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Product } from '../../../service/product/product';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  isSidePanelVisible: boolean = false;

  productObj: any = {
    "productId": 0,
    "productName": "",
    "productSku": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": "",
    "userId": 0
  }

  categoryList: any[] = [];
  productList: any[] = [];
  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.getCategory();
    this.getAllProducts();
  }

  getCategory() {
    this.productService.getCategory().subscribe((response: any) => {
      this.categoryList = response.data;
    });
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((response: any) => {
      this.productList = response.data;
    });
  }

  onReset() {
    this.productObj = {
      "productId": 0,
      "productName": "",
      "productSku": "",
      "productPrice": 0,
      "productShortName": "",
      "productDescription": "",
      "createdDate": new Date(),
      "deliveryTimeSpan": "",
      "categoryId": 0,
      "productImageUrl": "",
      "userId": 0
    }
  }

  onSave() {
    this.productService.saveProduct(this.productObj).subscribe((response: any) => {
      if (response.result) {
        this.onReset();
        this.closeSidePanel();
        alert('Product saved successfully!');
      } else {
        alert('Failed to save product. Please try again.');
      }
    });
  }

  onEdit(product: any) {
    this.productObj = { ...product };
    this.openSidePanel();
  }

  onUpdate() {
    this.productService.updateProduct(this.productObj).subscribe((response: any) => {
      if (response.result) {
        this.onReset();
        this.closeSidePanel();
        alert('Product updated successfully!');
      } else {
        alert('Failed to update product. Please try again.');
      }
    });
  }

  onDelete(product: any) {
    if (confirm(`Are you sure you want to delete the product: ${product.productName}?`)) {
      this.productService.deleteProduct(product.productId).subscribe((response: any) => {
        if (response.result) {
          alert('Product deleted successfully!');
          this.getAllProducts(); // Refresh the product list after deletion
        } else {
          alert('Failed to delete product. Please try again.');
        }
      });
    }
  }

  openSidePanel(){
    this.isSidePanelVisible = true;
  }
  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
