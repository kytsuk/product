import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import {ProductService} from "./components/product/product.service";
import { StarComponent } from './components/star/star.component';

import { AddProductComponent } from './components/product/add-product/add-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { SearchPipe } from './search.pipe';
import {AppRoutingModule} from "./app-routing.module";
import { LoadComponent } from './components/load/load.component';

import { ModalDialogComponent } from './components/modal/modal-dialog/modal-dialog.component';
import { ModalDynamickComponent } from './components/modal/modal-dynamick/modal-dynamick.component';
import {NotificationManager} from "./components/modal/modal-dynamick/notification.manager";
import {ModalDialogService} from "./components/modal/modal-dialog.service";
import {DataService} from "./data.service";
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import {AuthService} from "./components/auth/auth.service";
import {AuthGuardService} from "./components/auth/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    StarComponent,
    AddProductComponent,
    EditProductComponent,
    SearchPipe,
    LoadComponent,
    ModalDialogComponent,
    ModalDynamickComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ProductService,  ModalDialogComponent, NotificationManager, ModalDialogService, DataService, AuthService, AuthGuardService],
  entryComponents: [ ModalDynamickComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
