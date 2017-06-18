import { Component, OnInit } from '@angular/core';
import {Product} from "../Product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../product.service";
import { Subscription } from "rxjs/Subscription";
import {isNumeric} from "rxjs/util/isNumeric";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  id: number = Math.floor(Math.random() * (1000 - 1)) + 1;
  myForm : FormGroup;
  pricenumber: boolean = false;
  constructor (private productservice: ProductService, private routes: Router) {
  }
  ngOnInit(){
        this.myForm = new FormGroup({
      img_url: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      price: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required)
    });

  }
  public  onSubmit(myForm: FormGroup){


  if (isNumeric(myForm.value.price) && isNumeric(myForm.value.rating) ) {
  let product: Product = new Product(this.id, myForm.value.name,
      myForm.value.code, myForm.value.price,
      myForm.value.rating, myForm.value.img_url);

  this.productservice.addProduct(product);
  this.pricenumber = false;
  this.goBack();
  } else this.pricenumber = true;
  }
  goBack(){
    this.routes.navigate(['/products']);
  }
}
