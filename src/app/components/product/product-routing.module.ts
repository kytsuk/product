import { NgModule } from "@angular/core";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { AuthGuardService } from "../auth/auth-guard.service";
import { EditProductComponent } from "./edit-product/edit-product.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([

            {path: 'products' , component: ProductListComponent},
            { path: 'product/:id' , component: ProductItemComponent},
            { path: 'add' , component: AddProductComponent, canActivate: [AuthGuardService]},
            {path: 'product/:id/edit' , component: EditProductComponent, canActivate: [AuthGuardService]},


        ])
    ],
    declarations: [],
    exports: [RouterModule]
})
export class ProductRoutingModule { }