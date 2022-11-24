import { Component, OnInit } from '@angular/core';
import { Ipass } from 'src/app/shared/model/data';
import { PassengerService } from 'src/app/shared/service/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
public passObj : Ipass |undefined;
public passId : number = 1;
  constructor(private passService : PassengerService) { }

  ngOnInit(): void {
    this.passObj = this.passService.getPassenger(this.passId)
  }

}
