import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/model/data';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.scss']
})
export class EditComponentComponent implements OnInit {
  public prodObj : IProduct | undefined;
  public prodId : number = 3;
  constructor(private productService : ProductsService,
    private router : Router,
    private route : ActivatedRoute) { } //used for converting absolute to relative path

  ngOnInit(): void {
    this.prodObj = this.productService.getProduct(this.prodId)
  }
  goToUsers(){
    this.router.navigate(['users'], {relativeTo : this.route}) //localHost:4200/products/users
    //throw an error Cannot match any routes. URL Segment: 'products/users'
    //bydefault navigate method take absolute path means base URl to make it relative path we have to inject (private route : ActivatedRoute) service & we have to add 2nd argument in navigate method {relativeTo : this.route}
  }
}
