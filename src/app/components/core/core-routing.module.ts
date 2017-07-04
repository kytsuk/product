import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LoadComponent } from "./load/load.component";
import { AuthGuardService } from "../auth/auth-guard.service";
import {LoadPanelComponent} from "./load-panel/load-panel.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([

            { path: 'load' , component: LoadComponent, canActivate: [AuthGuardService]},
            { path: 'load-panel' , component: LoadPanelComponent},

        ])
    ],
    declarations: [],
    exports: [RouterModule]
})
export class CoreRoutingModule { }