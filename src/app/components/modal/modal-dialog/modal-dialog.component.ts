import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../Product.model";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {
  product:Product;
  @Input() id: number;
  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private productservise: ProductService) {  }
  ngOnInit(): void {
    this.product = this.productservise.getProduct(this.id);

  }

  public confirm() {
    this.isConfirmed.emit(true);
  }

  public close() {
    this.isConfirmed.emit(false);

  }
}
