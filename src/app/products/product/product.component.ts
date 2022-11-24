import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/model/data';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
public prodObj : IProduct | undefined;
public prodId : number = 3;
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.prodObj = this.productService.getProduct(this.prodId)
  }

}
