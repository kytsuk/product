import { Injectable } from '@angular/core';
import {Product} from "./Product.model";

@Injectable()
export class ProductService {
 public products: Product[] = [];
  constructor() {
    this.products = [
        new Product (
            1,
            'keyboard',
            "XA-TS34",
            23,
            4.5,
            "https://assets.logitech.com/assets/65057/k840-mechanical-pdp.png"

        ),
        new Product (
            2,
            'mouse',
            "BR-TS34",
            21,
            3.7,
            "https://assets.logitech.com/assets/64362/3/wireless-mouse-m325.png"

        )
    ]


  }
getProducts(){
     return this.products;
}
 getProduct(id:number){
    return this.products[id];
 }
 addProduct(product:Product):any{
    this.products.push(new Product(product.id,
        product.name, product.code, product.price, product.rating, product.img_url));
 }
 deleteProduct(id:number){
    this.products.splice(id, 1);
 }
 editProduct(id:number, product:Product){
    this.products.splice(id, 1, product);
 }
}
