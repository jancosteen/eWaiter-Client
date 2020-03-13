import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantRoutingModule } from './restaurant-routing/restaurant-routing.module';
	
import { MaterialModule } from './../material/material.module';



@NgModule({
  declarations: [RestaurantListComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    MaterialModule
  ]
})
export class RestaurantModule { }

