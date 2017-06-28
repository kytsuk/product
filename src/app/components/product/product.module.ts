import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductItemComponent} from "./product-item/product-item.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {StarComponent} from "./star/star.component";
import {ModalDialogComponent} from "../modal/modal-dialog/modal-dialog.component";
import {ProductRoutingModule} from "./product-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchPipe} from "../../search.pipe";
import {FilterPipe} from "../../filter.pipe";

@NgModule({
  imports: [
    CommonModule,
      ProductRoutingModule,
      FormsModule,
      ReactiveFormsModule
],
  declarations: [
      ProductListComponent,
      ProductItemComponent,
      AddProductComponent,
      EditProductComponent,
      StarComponent,
      ModalDialogComponent,
      SearchPipe,
      FilterPipe
  ],
  exports: [StarComponent]
})
export class ProductModule { }
