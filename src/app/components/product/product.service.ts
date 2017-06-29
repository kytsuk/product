import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
public setColor: string[]= [];
  constructor() { }
choiseColor(color: string){
    //this.setColor.splice(0,1);
    this.setColor.push(color);
    console.log(this.setColor);

}
}
