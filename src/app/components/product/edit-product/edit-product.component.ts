import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ActivatedRoute, Router} from "@angular/router";
import {isNumeric} from "rxjs/util/isNumeric";
import {Product} from "../Product.model";
import {DataService} from "../../../data.service";


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
 product: Product;
 id: string;
  myForm: FormGroup;
  pricenumber: boolean = false;
    @ViewChild('img_url') el: ElementRef;
    reader: any;

    url: string;

    name: string
  constructor (private dataServise: DataService, private routes: Router, private   route: ActivatedRoute) {

   this.route.params.subscribe(res => this.id= res['id']);


  }
  ngOnInit(){

      this.dataServise.getProduct(this.id)
          .subscribe(
              (res) => {
                 this.product = res;


                  this.myForm = new FormGroup({
                      img_url: new FormControl(),
                      name: new FormControl(this.product.name, [Validators.required]),
                      code: new FormControl(this.product.code, [Validators.required]),
                      price: new FormControl(this.product.price, Validators.required),
                      rating: new FormControl(this.product.rating, Validators.required)
                  });
              }
          );

       }

  public  onSubmit(myForm: FormGroup){
      let valueInput = (<HTMLInputElement>document.getElementById('img_url')).value;
         if (!valueInput ) {
        this.url = this.product.img_url;

   } else {
       this.url = this.reader.result
        }

    if (isNumeric(myForm.value.price) && isNumeric(myForm.value.rating) ) {
     // let product: Product = new Product(this.product.id,
         // myForm.value.name,
         // myForm.value.code,
         // myForm.value.price,
         //myForm.value.rating,
         // this.url);
     // this.dataServise.editProduct(this.id, product);
      //console.log(product);
      this.pricenumber = false;
      this.goBack();
    };
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
}
