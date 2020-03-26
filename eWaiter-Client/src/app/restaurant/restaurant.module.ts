import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantRoutingModule } from './restaurant-routing/restaurant-routing.module';
	
import { MaterialModule } from './../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantDataComponent } from './restaurant-details/restaurant-data/restaurant-data.component';
import { AdvertisementDataComponent } from './restaurant-details/advertisement-data/advertisement-data.component';
import { FoodTypeDataComponent } from './restaurant-details/food-type-data/food-type-data.component';
import { RetaurantImgDataComponent } from './restaurant-details/retaurant-img-data/retaurant-img-data.component';
import { RestaurantTypeDataComponent } from './restaurant-details/restaurant-type-data/restaurant-type-data.component';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [RestaurantListComponent, RestaurantDetailsComponent, RestaurantDataComponent, AdvertisementDataComponent, FoodTypeDataComponent, RetaurantImgDataComponent, RestaurantTypeDataComponent, RestaurantCreateComponent],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class RestaurantModule { }

