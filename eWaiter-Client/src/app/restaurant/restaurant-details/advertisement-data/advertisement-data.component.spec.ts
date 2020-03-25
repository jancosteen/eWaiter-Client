import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementDataComponent } from './advertisement-data.component';

describe('AdvertisementDataComponent', () => {
  let component: AdvertisementDataComponent;
  let fixture: ComponentFixture<AdvertisementDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
