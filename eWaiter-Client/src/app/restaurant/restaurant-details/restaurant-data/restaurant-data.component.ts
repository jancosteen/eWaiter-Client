import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Restaurant } from 'src/app/_interface/Restaurant/restaurant.model';

@Component({
  selector: 'app-restaurant-data',
  templateUrl: './restaurant-data.component.html',
  styleUrls: ['./restaurant-data.component.css']
})
export class RestaurantDataComponent implements OnInit {

  @Input() public restaurant: Restaurant;
  public selectOptions = [{name: 'Show', value: 'show'}, {name:`Don't Show`, value: ''}];
  @Output() selectEmitt = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onChange = (event) => {
    this.selectEmitt.emit(event.value);
  }

}
