import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProductListComponent} from "./components/product/product-list/product-list.component";
import {ProductItemComponent} from "./components/product/product-item/product-item.component";
import {AddProductComponent} from "./components/product/add-product/add-product.component";
import {EditProductComponent} from "./components/product/edit-product/edit-product.component";

import {LoadComponent} from "./components/load/load.component";
import {ModalDialogComponent} from "./components/modal/modal-dialog/modal-dialog.component";
import {HomeComponent} from "./components/home/home.component";
import {SignUpComponent} from "./components/auth/sign-up/sign-up.component";
import {SignInComponent} from "./components/auth/sign-in/sign-in.component";
import {AuthGuardService} from "./components/auth/auth-guard.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products' , component: ProductListComponent},
      { path: 'product/:id' , component: ProductItemComponent},
      { path: 'add' , component: AddProductComponent, canActivate: [AuthGuardService]},
      {path: 'product/:id/edit' , component: EditProductComponent, canActivate: [AuthGuardService]},
      { path: 'load' , component: LoadComponent},
      { path: 'register' , component:  SignUpComponent},
      { path: 'login' , component:  SignInComponent}

    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
