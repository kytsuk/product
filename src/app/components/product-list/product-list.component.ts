import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Product} from '../Product.model';
import {ProductService} from '../product.service';
import {NotificationManager} from "../modal/modal-dynamick/notification.manager";

import {ModalDialogService} from "../modal/modal-dialog.service";



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
private productes: Product[];
        showimg: boolean = true;
        btnText: string = 'Hidden';
        ListFilter: string = "";
        id: number ;

  private isModalDialogVisible: boolean = false;
  @ViewChild('notificationBlock', { read: ViewContainerRef }) notificationBlock: ViewContainerRef;

  constructor(private productservice: ProductService, private notificationManager: NotificationManager, private modalservise: ModalDialogService)
  { }

  ngOnInit() {
    this.productes = this.productservice.getProducts();
    this.notificationManager.init(this.notificationBlock);
  }
  showImage(){
    this.showimg ? this.btnText = 'Show' : this.btnText = 'Hidden';
    this.showimg = !this.showimg;

  }
  public showDialog() {
    this.isModalDialogVisible = true;
  }
  public closeModal(isConfirmed: boolean) {
    this.isModalDialogVisible = false;
    if (isConfirmed) {
      //alert( "modal dialog is confirmed");
    }
    else {
     // alert("modal dialog is closed");
    }
      }
  //
  showDialogDin(){
    this.modalservise.showDialogDin('Its dynamic Modal', 'Some text');
  }
}
