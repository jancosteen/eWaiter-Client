import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTypeDataComponent } from './food-type-data.component';

describe('FoodTypeDataComponent', () => {
  let component: FoodTypeDataComponent;
  let fixture: ComponentFixture<FoodTypeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTypeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTypeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
