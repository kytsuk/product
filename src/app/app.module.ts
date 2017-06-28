import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';




import {AppRoutingModule} from "./app-routing.module";


import {NotificationManager} from "./components/modal/modal-dynamick/notification.manager";
import {ModalDialogService} from "./components/modal/modal-dialog.service";
import {DataService} from "./data.service";


import {AuthService} from "./components/auth/auth.service";
import {AuthGuardService} from "./components/auth/auth-guard.service";

import { ModalDynamickComponent } from "./components/modal/modal-dynamick/modal-dynamick.component";

import {ProductModule} from "./components/product/product.module";
import {CoreModule} from "./components/core/core.module";
import {AuthModule} from "./components/auth/auth.module";
import {HomeComponent} from "./components/core/home/home.component";
import {ModalModule} from "./components/modal/modal.module";








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
     HttpModule,
    AppRoutingModule,
    ProductModule,
    CoreModule,
    ModalModule,
    AuthModule

  ],

  providers: [ NotificationManager, ModalDialogService, DataService, AuthService, AuthGuardService],
  entryComponents: [ ModalDynamickComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
