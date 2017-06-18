import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isNumeric} from "rxjs/util/isNumeric";
import {Product} from "../Product.model";
import {ProductItemComponent} from "../product-item/product-item.component";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
 product: Product;
 id: number;
  myForm : FormGroup;
  pricenumber: boolean = false;
  constructor (private productservice: ProductService, private routes: Router, private   route: ActivatedRoute) {

   this.route.params.subscribe(res => this.id= +res['id']);
    this.product = this.productservice.getProduct(this.id);

  }
  ngOnInit(){
    this.myForm = new FormGroup({
      img_url: new FormControl(this.product.img_url, Validators.required),
      name: new FormControl(this.product.name, [Validators.required]),
      code: new FormControl(this.product.code, [Validators.required]),
      price: new FormControl(this.product.price, Validators.required),
      rating: new FormControl(this.product.rating, Validators.required)
    });

  }
  public  onSubmit(myForm: FormGroup){


    if (isNumeric(myForm.value.price) && isNumeric(myForm.value.rating) ) {
      let product: Product = new Product(this.id, myForm.value.name,
          myForm.value.code, myForm.value.price,
          myForm.value.rating, myForm.value.img_url);

      this.productservice.editProduct(this.id, product);
      this.pricenumber = false;
      this.goBack();
    } else this.pricenumber = true;
  }
  goBack(){
    this.routes.navigate(['/products']);
  }
}
