import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadComponent} from "./load/load.component";
import {FormsModule} from "@angular/forms";
import {CoreRoutingModule} from "./core-routing.module";

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      CoreRoutingModule
  ],
  declarations: [
      LoadComponent
  ]
})
export class CoreModule { }
