import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from '../restaurant-details/restaurant-details.component';
import { RestaurantCreateComponent } from '../restaurant-create/restaurant-create.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'details/:id', component: RestaurantDetailsComponent},
  { path: 'create', component: RestaurantCreateComponent}
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
