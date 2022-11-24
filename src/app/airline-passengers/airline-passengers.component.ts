import { Component, OnInit } from '@angular/core';
import { Ipass } from '../shared/model/data';
import { PassengerService } from '../shared/service/passenger.service';

@Component({
  selector: 'app-airline-passengers',
  templateUrl: './airline-passengers.component.html',
  styleUrls: ['./airline-passengers.component.scss']
})
export class AirlinePassengersComponent implements OnInit {
public passArr : Ipass [] = [];

  constructor(private passService : PassengerService) { }

  ngOnInit(): void {
    this.passArr = this.passService.getAllPassenger();
  }

}
