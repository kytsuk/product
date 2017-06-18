import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {ProductService} from "./components/product.service";
import { StarComponent } from './components/star/star.component';
import {RouterModule} from "@angular/router";
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    StarComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      RouterModule.forRoot([
        {path: '', component: AppComponent, pathMatch: 'full'},
        {path: 'products' , component: ProductListComponent},
        { path: 'product/:id' , component: ProductItemComponent},
        { path: 'add' , component: AddProductComponent},
        {path: 'product/:id/edit' , component: EditProductComponent},
        {path: 'star' , component: StarComponent}

      ]),
      ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
