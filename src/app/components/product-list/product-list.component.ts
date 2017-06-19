import { Component, OnInit } from '@angular/core';
import {Product} from '../Product.model';
import {ProductService} from '../product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
private productes: Product[];
        showimg: boolean = true;
        btnText: string = 'Hidden';
        ListFilter: string = "";
  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productes = this.productservice.getProducts();

  }
  showImage(){
    this.showimg ? this.btnText = 'Show' : this.btnText = 'Hidden';
    this.showimg = !this.showimg;

  }
  onModal(){
   // this.modal.element.nativeElement.alert("");
  }
}
