import { Component, OnInit, Input } from '@angular/core';
import { FoodType } from 'src/app/_interface/foodType.model';

@Component({
  selector: 'app-food-type-data',
  templateUrl: './food-type-data.component.html',
  styleUrls: ['./food-type-data.component.css']
})
export class FoodTypeDataComponent implements OnInit {
  @Input() public foodTypes: FoodType[];

  constructor() { }

  ngOnInit(): void {
  }

}
