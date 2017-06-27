import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LoadComponent } from "./load/load.component";
import { AuthGuardService } from "../auth/auth-guard.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([

            { path: 'load' , component: LoadComponent, canActivate: [AuthGuardService]},


        ])
    ],
    declarations: [],
    exports: [RouterModule]
})
export class CoreRoutingModule { }