import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Restaurant } from '_interface/restaurant.model';
import { RepositoryService } from 'src/app/shared/repository.service';
import { MatSortModule, MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  public displayedColumns = [
    'name',
    'websiteUrl',
    'socialMediaAddress',
    'details',
    'update',
    'delete'
  ];

  public restaurantDataSource = new MatTableDataSource<Restaurant>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.getAllRestaurants();
  }

  ngAfterViewInit(): void {
    this.restaurantDataSource.sort = this.sort;
  }

  public doFilter = (value: string) => {
    this.restaurantDataSource.filter = value.trim().toLocaleLowerCase();
  }

  public getAllRestaurants = () => {
    this.repoService.getRestaurants('api/restaurant')
      .subscribe(res => {
        this.restaurantDataSource.data = res as Restaurant[];
      })
  }

  public redirectToDetails = (id: number) => {

  }

  public redirectToUpdate = (id: number) => {

  }

  public redirectToDelete = (id: number) => {
    
  }
}
