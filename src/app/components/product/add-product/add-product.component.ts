import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../Product.model";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

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

    @ViewChild('img_url') el:ElementRef;
    reader: any;
  constructor (private dataServise: DataService, private routes: Router) {
  }
  ngOnInit(){
        this.myForm = new FormGroup({
      img_url: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      price: new FormControl('', Validators.required),
      rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
      description: new FormArray([
           new FormControl("", Validators.required)

          ])
    });

  }

  public  onSubmit(myForm: FormGroup){

  if (isNumeric(myForm.value.price) && isNumeric(myForm.value.rating) ) {
  let product: Product = new Product(this.id, myForm.value.name,
      myForm.value.code, myForm.value.price,
      myForm.value.rating, this.reader.result);

  this.dataServise.addProduct(product)

  this.pricenumber = false;
  this.goBack();

  console.log(this.myForm);
  } else this.pricenumber = true;
  }
  goBack(){
    this.routes.navigate(['/']);
  }

  fileUpload() {
    let file = this.el.nativeElement.files[0];
    let imageType = /image.*/;
    if (file.type.match(imageType)) {
      this.reader = new FileReader();
      this.reader.onloadend = (e) => {
        let img = new Image();
        img.src = this.reader.result;
        console.log(this.reader.result);
      }
      this.reader.readAsDataURL(file);
    }else {
    }
  }
  Add(){
    (<FormArray>this.myForm.controls["description"]).push(new FormControl("", Validators.required));
    console.log(this.myForm.controls["description"]);
  }
}
