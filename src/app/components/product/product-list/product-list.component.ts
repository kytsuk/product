import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Product} from '../Product.model';

import {NotificationManager} from "../../modal/modal-dynamick/notification.manager";

import {ModalDialogService} from "../../modal/modal-dialog.service";
import {DataService} from "../../../data.service";
import {Pipe} from  "@angular/core";




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
public productes: Product[]=[];
        showimg: boolean = true;
        btnText: string = 'Hidden';
        ListFilter: string = "";
        id: string ;
  public arrayOfKeys;

  private isModalDialogVisible: boolean = false;
  @ViewChild('notificationBlock', { read: ViewContainerRef }) notificationBlock: ViewContainerRef;

  constructor(private notificationManager: NotificationManager,
              private modalservise: ModalDialogService,
              private dataServise: DataService)
  {  }

  ngOnInit() {
      this.dataServise.loadDate()
          .subscribe( res => {

              this.arrayOfKeys = Object.keys(res);
              this.productes = res;


          });

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

  showDialogDin(){
    this.modalservise.showDialogDin('Its dynamic Modal', 'Some text');
  }


}
