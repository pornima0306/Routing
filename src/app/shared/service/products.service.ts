import { Injectable } from '@angular/core';
import { IProduct } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public productArray : IProduct[] = [
    {
      pName : 'Laptop',
      pDetails : 'wertu',
      pStatus : 'In progress',
      pId : 1
    },
    {
      pName : 'iphone',
      pDetails : 'iphone13',
      pStatus : 'Dispached',
      pId : 2
    },
    {
      pName : 'Samsung',
      pDetails : 'Samsung M-13',
      pStatus : 'Delivered',
      pId : 3
    },
    {
      pName : 'Dell Laptop',
      pDetails : 'core i7',
      pStatus : 'In progress',
      pId : 4
    }
  ]
  constructor() { }

  getAllProducts() : IProduct[]{
   return this.productArray;
  }

  getProduct(id :number){
    return this.productArray.find(product => product.pId ===id)
  }
}
