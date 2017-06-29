import { Component, Input, OnInit } from '@angular/core';
import { DataService } from "../../../data.service";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-desc-color',
  templateUrl: './desc-color.component.html',
  styleUrls: ['./desc-color.component.css']
})
export class DescColorComponent implements OnInit {
  @Input() ListFilter;
  arrayOfKeys;
  desc : any[]=[];
  obj: any={};
 @Input() touch: boolean;
  visibile: boolean= true;
  constructor(private dataServise: DataService, public setcolor: ProductService ) { }

  ngOnInit() {
    this.dataServise.loadDate()
        .subscribe( res => {
          this.arrayOfKeys = Object.keys(res);
          for (let j of this.arrayOfKeys){
            if(res[j].description != null) {
              for (let i of res[j].description) {
                let str = i.color;
                this.obj[str] = true;
              }
            }
          }
          for(let a of Object.keys(this.obj)){
            this.desc.push(a);
          }

        });

  }
  addColor(color:string){
    this.setcolor.choiseColor(color);
    this.visibile = false;
  }
}
