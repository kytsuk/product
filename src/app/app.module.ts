import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {ProductService} from "./components/product.service";
import { StarComponent } from './components/star/star.component';

import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { SearchPipe } from './search.pipe';
import {AppRoutingModule} from "./app-routing.module";
import { LoadComponent } from './components/load/load.component';
import {UploadService} from "./upload.service";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    StarComponent,
    AddProductComponent,
    EditProductComponent,
    SearchPipe,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ProductService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
