import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../product/Product.model";

import {DataService} from "../../../data.service";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {
  product:Product;
  @Input() id: string;
  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private dataServise: DataService) {  }
  ngOnInit(): void {
    this.dataServise.getProduct(this.id).subscribe(res => this.product = res);

  }

  public confirm() {
    this.isConfirmed.emit(true);
  }

  public close() {
    this.isConfirmed.emit(false);

  }
}
