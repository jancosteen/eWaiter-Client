import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetaurantImgDataComponent } from './retaurant-img-data.component';

describe('RetaurantImgDataComponent', () => {
  let component: RetaurantImgDataComponent;
  let fixture: ComponentFixture<RetaurantImgDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetaurantImgDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetaurantImgDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
