import {Component, OnInit, Output} from '@angular/core';
import {Product} from "../Product.model";
import {ProductService} from "../product.service";
import {ActivatedRoute,  Router} from "@angular/router";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  product:Product;
  id:number;
  constructor(private productservise: ProductService, private route: ActivatedRoute, private routes: Router) {
      this.route.params.subscribe(res => this.id = +res['id'] );
  }

  ngOnInit() {
this.product = this.productservise.getProduct(this.id);

  }
  goBack(){
    this.routes.navigate(['product']);
  }
  edit(){
    this.routes.navigate(['product', this.id, 'edit']);
  }
  deleteProduct(){
    this.productservise.deleteProduct(this.id);
    this.goBack();
  }
}
