import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinePassengersComponent } from './airline-passengers.component';

describe('AirlinePassengersComponent', () => {
  let component: AirlinePassengersComponent;
  let fixture: ComponentFixture<AirlinePassengersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlinePassengersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlinePassengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
