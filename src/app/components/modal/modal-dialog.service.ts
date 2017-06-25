import {Injectable, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalDynamickComponent} from "./modal-dynamick/modal-dynamick.component";
import {ModalDialogResult} from "./modal-dynamick/modalDialog.base";
import {NotificationManager} from "./modal-dynamick/notification.manager";

@Injectable()
export class ModalDialogService {

  constructor(private notificationManager: NotificationManager) { }

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
