import { Advertisement } from './advertisement.model';
import { FoodType } from './foodType.model';
import { RestaurantImg } from './restaurantImg.model';
import { RestaurantType } from './restaurantType.model';

//all these properties need to be EXACTLY as the JSON object GET request
export interface Restaurant {
    id: number;
    name: string;
    websiteUrl: string;
    socialMediaAddress: string;

    
    advertisment?:Advertisement;
    foodType?:FoodType;
    restaurantImg?: RestaurantImg;
    restaurantType?: RestaurantType;
}