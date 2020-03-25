import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from '../restaurant-details/restaurant-details.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'details/:id', component: RestaurantDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RestaurantRoutingModule { }
