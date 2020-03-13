import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  public getRestaurants = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, environment.ulrAddress));
  }

  public createRestaurant = (route: string, body) => {
    return this.http.post(this.createCompleteRoute(route, environment.ulrAddress), body, this.generateHeaders());
  }

  public updateRestaurant = (route: string, body) => {
    return this.http.put(this.createCompleteRoute(route, environment.ulrAddress), body, this.generateHeaders());
  }

  public deleteRestaurant = (route:string) => {
    return this.http.delete(this.createCompleteRoute(route, environment.ulrAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
  }
}
