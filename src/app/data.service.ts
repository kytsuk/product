import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Product} from "./components/Product.model";
import {ProductService} from "./components/product.service";
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

  constructor(private  http: Http, private products: ProductService) { };
  url = 'https://shop-product.firebaseio.com/product.json'


  loadDate(){
    return this.http.get(this.url );
  }
  getProduct(id: number) {
    return this.http.get('https://shop-product.firebaseio.com/product/' + id + '.json')
        .map(this.extractProduct);
  }
  private extractProduct (response: Response){
    let res = response.json();
    let product = (new Product(res.id, res.name, res.code, res.price, res.rating, res.img_url));

    return product;
  }

}
