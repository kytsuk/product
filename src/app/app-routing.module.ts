import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { HomeComponent } from "./components/core/home/home.component";



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},

    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
