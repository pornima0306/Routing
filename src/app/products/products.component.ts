import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/model/data';
import { ProductsService } from '../shared/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public productArr : IProduct[] = [];

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.productArr = this.productsService.getAllProducts()
  }

}
