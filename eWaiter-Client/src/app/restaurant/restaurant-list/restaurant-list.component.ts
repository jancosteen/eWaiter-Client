import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Restaurant } from 'src/app/_interface/restaurant.model';
import { RepositoryService } from 'src/app/shared/repository.service';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { Router } from '@angular/router';

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
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private repoService: RepositoryService, private errorService:ErrorHandlerService, private router: Router) { }

  ngOnInit() {
    this.getAllRestaurants();
  }

  ngAfterViewInit(): void {
    this.restaurantDataSource.sort = this.sort;
    this.restaurantDataSource.paginator = this.paginator;
  }

  public doFilter = (value: string) => {
    this.restaurantDataSource.filter = value.trim().toLocaleLowerCase();
  }

  public getAllRestaurants = () => {
    this.repoService.getRestaurants('api/restaurant')
      .subscribe(res => {
        this.restaurantDataSource.data = res as Restaurant[];
      },
      (error) => {
        this.errorService.handleError(error);
      })
  }

  public redirectToDetails = (id: string) => {
    let url: string =`/restaurant/details/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate = (id: number) => {

  }

  public redirectToDelete = (id: number) => {
    
  }
}
