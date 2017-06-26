import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../Product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {isNumeric} from "rxjs/util/isNumeric";
import {Router} from "@angular/router";

import {DataService} from "../../../data.service";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  id: number = Math.floor(Math.random() * (1000 - 1)) + 1;
  myForm : FormGroup;
  pricenumber: boolean = false;
  url: string = '../../../assets/image/';
    @ViewChild('img_url') el:ElementRef;
  constructor (private dataServise: DataService, private routes: Router) {
  }
  ngOnInit(){
        this.myForm = new FormGroup({
      img_url: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      price: new FormControl('', Validators.required),
      rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)])
    });

  }

  public  onSubmit(myForm: FormGroup){
  let img_url = this.el.nativeElement.files[0].name;
  if (isNumeric(myForm.value.price) && isNumeric(myForm.value.rating) ) {
  let product: Product = new Product(this.id, myForm.value.name,
      myForm.value.code, myForm.value.price,
      myForm.value.rating, this.url+img_url);

  this.dataServise.addProduct(product)

  this.pricenumber = false;
  this.goBack();

  console.log(product);
  } else this.pricenumber = true;
  }
  goBack(){
    this.routes.navigate(['/']);
  }

}