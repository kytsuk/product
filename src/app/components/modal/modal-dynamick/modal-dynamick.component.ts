import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {ModalDialogResult} from "./modalDialog.base";

@Component({
  selector: 'app-modal-dynamick',
  templateUrl: './modal-dynamick.component.html',
  styleUrls: ['./modal-dynamick.component.css']
})
export class ModalDynamickComponent implements OnInit {
  ngOnInit(): void {

  }

  private header: string;
  private description: string;
  private modalState: Subject<ModalDialogResult>;

  constructor() {

    this.modalState = new Subject();
  }

  public getDialogState(): Subject<ModalDialogResult> {
    return this.modalState;
  }

  public confirm() {
    this.modalState.next(ModalDialogResult.Confirmed);
  }

  public close() {
    this.modalState.next(ModalDialogResult.Closed);
  }
}
