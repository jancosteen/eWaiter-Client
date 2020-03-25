import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTypeDataComponent } from './restaurant-type-data.component';

describe('RestaurantTypeDataComponent', () => {
  let component: RestaurantTypeDataComponent;
  let fixture: ComponentFixture<RestaurantTypeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantTypeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantTypeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
