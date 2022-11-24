import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../shared/model/data';
import { UsersService } from '../shared/service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
public usersArr : IUser[]=[];

  constructor(private userService : UsersService,
    private router : Router) { }

  ngOnInit(): void {
    this.usersArr = this.userService.getAllUsers();
   
  }
  goToAirlinePassengers(){
    this.router.navigate(['AirlinePassengers'])
  }

}
