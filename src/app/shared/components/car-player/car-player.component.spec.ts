import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPlayerComponent } from './car-player.component';

describe('CarPlayerComponent', () => {
  let component: CarPlayerComponent;
  let fixture: ComponentFixture<CarPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarPlayerComponent]
    });
    fixture = TestBed.createComponent(CarPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
