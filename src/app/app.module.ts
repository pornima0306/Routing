import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AirlinePassengersComponent } from './airline-passengers/airline-passengers.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { ProductComponent } from './products/product/product.component';

import { PassCardComponent } from './airline-passengers/pass-card/pass-card.component';
import { EditComponentComponent } from './products/edit-component/edit-component.component';

const appRoutes : Routes =[
  {
    path : '', component : DashboardComponent //localhost:4200/
  },
  {
    path : 'users', component : UsersComponent //localhost:4200/users
  },
  {
    path : 'users/:id', component : UserComponent //localhost:4200/users/1
  },
  {
    path : 'AirlinePassengers', component : AirlinePassengersComponent //localhost:4200/AirlinePassengers
  },
  {
    path : 'products', component : ProductsComponent //localhost:4200/Products
  },
  {
    path : 'products/:id', component : ProductComponent //localhost:4200/Products/1
  }
  
]



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    NavigationComponent,
    DashboardComponent,
    AirlinePassengersComponent,
    UserComponent,
    ProductComponent,
    
    PassCardComponent,
         EditComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
