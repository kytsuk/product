import {Component, OnInit, Output} from '@angular/core';
import {Product} from "../Product.model";

import {ActivatedRoute,  Router} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product: Product;
  id: number;
  constructor(private dataServise: DataService, private route: ActivatedRoute, private routes: Router) {
      this.route.params.subscribe(res => this.id = +res['id'] );
  }

  ngOnInit() {
  this.dataServise.getProduct(this.id)
      .subscribe(
          res => {
            this.product = res;
          }
      );

  }
  goBack(){
    this.routes.navigate(['products']);
  }
  edit(){
    this.routes.navigate(['product', this.id, 'edit']);
  }
  // deleteProduct(){
  //   this.productservise.deleteProduct(this.id);
  //   this.goBack();
  // }
}
