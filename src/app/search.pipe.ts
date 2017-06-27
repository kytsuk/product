import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./components/product/Product.model";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Product[], filterBy: string): Product[] {
   filterBy = filterBy ? filterBy.toLocaleLowerCase() : null
    return filterBy ? value.filter((product: Product) =>
     product.name.toLocaleLowerCase().indexOf(filterBy) !==-1):value;
  }

}
