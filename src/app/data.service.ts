import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Product} from "./components/product/Product.model";

import 'rxjs/add/operator/map';

import  _ from 'lodash';
import {Observable} from "rxjs";
import {AuthService} from "./components/auth/auth.service";
@Injectable()
export class DataService {

  constructor(private  http: Http, private authServise: AuthService) { };
  url = 'https://shop-product.firebaseio.com/product';
  id: number = Math.floor(Math.random() * (1000 - 1)) + 1;

  loadDate(){

    return  this.http.get(this.url + '.json')
        .map((res:Response) => res.json());

  }
  getProduct(id: string) {
    return this.http.get(this.url +  '/' + id + '.json')
        .map(this.extractProduct);
  }

  private extractProduct (response: Response){
    let res = response.json();
    let product = (new Product(res.id, res.name, res.code, res.price, res.rating, res.img_url));
    return product;
  }

  public addProduct(product){
    const token = this.authServise.getToken()
    return this.http.post(this.url +  '.json?auth=' + token, product)
        .subscribe(res=> res);

  }
  public editProduct(id:string, product: Product){
    const token = this.authServise.getToken()
    return this.http.patch(this.url + '/' + id + '.json?auth=' + token, product)
        .subscribe(res => res);
  }

deleteProduct(id:string, product: Product){
  const token = this.authServise.getToken()
    return this.http.delete(this.url + '/' + id + '.json?auth=' + token, product)
        .subscribe(res => res);
}


}
