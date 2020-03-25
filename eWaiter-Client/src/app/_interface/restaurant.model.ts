import { Advertisement } from './advertisement.model';
import { FoodType } from './foodType.model';
import { RestaurantImg } from './restaurantImg.model';
import { RestaurantType } from './restaurantType.model';


export interface Restaurant {
    id: number;
    name: string;
    websiteUrl: string;
    socialMediaAddress: string;

    advertisments?:Advertisement;
    foodTypes?:FoodType;
    restaurantImgs?: RestaurantImg;
    restaurantTypes?: RestaurantType;
}