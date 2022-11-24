import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router : Router) { }  /* Router service is given by the angular it is inbuilt service it is user to redirect from one component to another component */

  ngOnInit(): void {
  }
  goToProducts(){
    this.router.navigate(['/products'])
  }
}
