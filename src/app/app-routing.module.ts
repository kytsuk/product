import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductItemComponent} from "./components/product-item/product-item.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";

import {LoadComponent} from "./components/load/load.component";
import {ModalDialogComponent} from "./components/modal/modal-dialog/modal-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'products', pathMatch: 'full'},
      {path: 'products' , component: ProductListComponent},
      { path: 'product/:id' , component: ProductItemComponent},
      { path: 'add' , component: AddProductComponent},
      {path: 'product/:id/edit' , component: EditProductComponent},
      { path: 'load' , component: LoadComponent},
      { path: 'modal' , component: ModalDialogComponent},

    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
