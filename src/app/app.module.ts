import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';




import {AppRoutingModule} from "./app-routing.module";


import {NotificationManager} from "./components/modal/modal-dynamick/notification.manager";
import {ModalDialogService} from "./components/modal/modal-dialog.service";
import {DataService} from "./data.service";
import { HomeComponent } from './components/home/home.component';

import {AuthService} from "./components/auth/auth.service";
import {AuthGuardService} from "./components/auth/auth-guard.service";

import { ModalDynamickComponent } from "./components/modal/modal-dynamick/modal-dynamick.component";

import { ProductModule } from "./components/product/product.module";
import { CoreModule } from "./components/core/core.module";
import { ModalModule } from "./components/modal/modal.module";
import { AuthModule } from "./components/auth/auth.module";


@NgModule({
  declarations: [
    AppComponent,

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
