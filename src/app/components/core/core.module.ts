import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadComponent} from "./load/load.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoreRoutingModule} from "./core-routing.module";
import { LoadPanelComponent } from './load-panel/load-panel.component';

import {CarouselModule} from "ngx-bootstrap";

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      CoreRoutingModule,
      ReactiveFormsModule,
      CarouselModule
  ],
  declarations: [
      LoadComponent,
      LoadPanelComponent,

  ]
})
export class CoreModule { }
