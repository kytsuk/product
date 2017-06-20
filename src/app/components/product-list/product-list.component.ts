import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Product} from '../Product.model';
import {ProductService} from '../product.service';
import {NotificationManager} from "../modal/modal-dynamick/notification.manager";
import {ModalDynamickComponent} from "../modal/modal-dynamick/modal-dynamick.component";
import {ModalDialogResult} from "../modal/modal-dynamick/modalDialog.base";



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

  private isModalDialogVisible: boolean = false;
  @ViewChild('notificationBlock', { read: ViewContainerRef }) notificationBlock: ViewContainerRef;

  constructor(private productservice: ProductService, private notificationManager: NotificationManager)
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
      alert( "modal dialog is confirmed");
    }
    else {
      alert("modal dialog is closed");
    }
      }

      public showDialogDin(header: string, description: string) {
    this.notificationManager.showDialog(ModalDynamickComponent, header, description)
        .subscribe((x: ModalDialogResult)=> {
          if (x == ModalDialogResult.Confirmed) {
            alert("modal dialog is confirmed");
          }
          else {
            alert("modal dialog is closed");
          }
        });
  }
}
