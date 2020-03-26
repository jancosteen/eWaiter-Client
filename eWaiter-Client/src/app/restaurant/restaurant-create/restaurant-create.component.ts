import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RepositoryService } from 'src/app/shared/repository.service';
import { Location } from '@angular/common';
import { RestaurantForCreation } from 'src/app/_interface/Restaurant/restaurantForCreation.model';

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {
  public restaurantForm: FormGroup;


  constructor(private location: Location, private repository: RepositoryService) { }

  ngOnInit(): void {
    this.restaurantForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      websiteUrl: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      socialMediaAddress: new FormControl('', [Validators.required, Validators.maxLength(60)])
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.restaurantForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () =>{
    this.location.back();
  }

  public createRestaurant = (restaurantFormValue) =>{
    if (this.restaurantForm.valid){
      this.executeRestaurantCreation(restaurantFormValue);
    }
  }

  public executeRestaurantCreation = (restaurantFormValue)=>{
    let restaurant: RestaurantForCreation ={
      name: restaurantFormValue.name,
      websiteUrl: restaurantFormValue.websiteUrl,
      socialMediaAddress: restaurantFormValue.socialMediaAddress
    }

    let apiUrl = 'api/restaurant';
    this.repository.createRestaurant(apiUrl, restaurant)
      .subscribe(res =>{
        //this is temporary, until we create our dialogs
        this.location.back();
      },
      (error)=> {
        //temporary as well
        this.location.back();
      })
  }

}
