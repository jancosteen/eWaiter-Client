import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantRoutingModule } from './restaurant-routing/restaurant-routing.module';
	
import { MaterialModule } from './../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';




@NgModule({
  declarations: [RestaurantListComponent, RestaurantDetailsComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class RestaurantModule { }

