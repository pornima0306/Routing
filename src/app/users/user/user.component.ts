import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/model/data';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public usersObj : IUser | undefined;
  public userId : number = 1;
  constructor(private userService : UsersService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    /* this.usersObj = this.userService.getUser(this.userId) */

    this.userId = +this.route.snapshot.params['id'];
    console.log(this.userId);
    
    this.usersObj = this.userService.getUser(this.userId)
  }

}
