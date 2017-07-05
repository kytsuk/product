import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../Product.model";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

import {isNumeric} from "rxjs/util/isNumeric";
import {Router} from "@angular/router";
import {DataService} from "../../../data.service";
import { ProductService } from "../product.service";



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  id: number = Math.floor(Math.random() * (1000 - 1)) + 1;
  myForm : FormGroup;
  pricenumber: boolean = false;
  desc : any[]=[];
  obj: any={};
  colorFormAdd: string='';

    @ViewChild('img_url') el:ElementRef;
    reader: any;
   categoryitem:string[]= ['Notebook','Monitor','Matherboard','Keyboard', 'Other'];
  arrayOfKeys;
  constructor (private dataServise: DataService, private routes: Router , public setcolor: ProductService) {  }
  ngOnInit(){
        this.myForm = new FormGroup({
      img_url: new FormControl('', Validators.nullValidator),
      name: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
      price: new FormControl('', Validators.required),
      rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)]),
      description: new FormArray([
            this.initDescription()
          ])
    });
    this.dataServise.loadDate()
        .subscribe( res => {
        this.arrayOfKeys = Object.keys(res);
         for (let j of this.arrayOfKeys){
           if(res[j].description != null) {
             for (let i of res[j].description) {
               let str = i.color;
               this.obj[str] = true;
                  }
              }
          }
          for(let a of Object.keys(this.obj)){
             this.desc.push(a);
          }

        });

  }

  public  onSubmit(myForm: FormGroup){
  if (isNumeric(myForm.value.price) && isNumeric(myForm.value.rating) ) {
  let product: Product = new Product (this.id,
      myForm.value.name,
      myForm.value.code,
      myForm.value.price,
      myForm.value.rating,
      this.reader.result,
      myForm.controls.description.value);

  this.dataServise.addProduct(product)
  this.pricenumber = false;
  this.goBack();

  console.log(product);

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

      }
      this.reader.readAsDataURL(file);
    }else {
    }
  }
  initDescription(){
    return new FormGroup({
      color: new FormControl(''),
      amount: new FormControl('', [Validators.required]),
      category: new FormControl('', Validators.required)
    })
  }
  Add(){
    (<FormArray>this.myForm.controls['description']).push(this.initDescription());

     }

     removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls['description'];
    control.removeAt(i);
  }
addColor(color:string){
      this.colorFormAdd = color;


}
}
