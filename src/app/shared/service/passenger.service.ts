import { Injectable } from '@angular/core';
import { Ipass, IProduct } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

 public passengers : Ipass[] = [{
  id: 1,
  fullname: 'Stephen',
  checkedIn: true,
  checkInDate: 1490742000000,
  children: null
}, {
  id: 2,
  fullname: 'Rose',
  checkedIn: false,
  checkInDate: null,
  children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
}, {
  id: 3,
  fullname: 'James',
  checkedIn: true,
  checkInDate: 1491606000000,
  children: null
}, {
  id: 4,
  fullname: 'Louise',
  checkedIn: true,
  checkInDate: 1488412800000,
  children: [{ name: 'Jessica', age: 1 }]
}, {
  id: 5,
  fullname: 'Tina',
  checkedIn: false,
  checkInDate: null,
  children: null
},
{
  id: 6,
  fullname: 'Harry',
  checkedIn: false,
  checkInDate: null,
  children:  [{ name: 'deny', age: 7 }]
}];
  constructor() { }

  getAllPassenger(): Ipass[] {
    return this.passengers;
  }

  getPassenger(id : number){
    return this.passengers.find(pass => pass.id === id)
  }
}
