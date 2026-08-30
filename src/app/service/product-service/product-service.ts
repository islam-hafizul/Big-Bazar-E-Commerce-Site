import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) {}

    getCategory() {
        return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORIES);
    }

    getAllProducts() {
        return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS);
    }

    getAllProductsByCategoryId(categoryId: number) {
        return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_PRODUCT_BY_CATEGORY_ID + categoryId);
    }

    saveProduct(productObj: any) {
        return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT, productObj);
    }  
    
    updateProduct(productObj: any) {
        return this.http.post(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT, productObj);
    }

    deleteProduct(productId: number) {
        return this.http.get(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + productId);
    }
}
