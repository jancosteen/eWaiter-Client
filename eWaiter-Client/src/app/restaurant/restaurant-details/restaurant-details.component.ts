import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/_interface/restaurant.model';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { FoodType } from 'src/app/_interface/foodType.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  public restaurant: Restaurant;
  public showDetails;

  constructor(private repository: RepositoryService, private router: Router, 
    private activeRoute: ActivatedRoute, private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.getRestaurantDetails();
  }

  private getRestaurantDetails = () => {
    let id: string = this.activeRoute.snapshot.params['id'];
    let apiUrl: string = `api/restaurant/${id}/details`;

    this.repository.getRestaurants(apiUrl)
      .subscribe(res => {
        this.restaurant = res as Restaurant;         
      },
      (error) => {
        this.errorHandler.handleError(error);
      })
  }

}
