import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICarModel } from 'src/app/core/models/cars.model';
import { AppState } from 'src/app/store/app.store';
import * as actionsCar from '../../../../store/actions/car.actions';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss']
})
export class CarsPageComponent implements OnInit {

  carList$: Observable<ICarModel[]> = this.store.select(state => state.cars.cars)

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(actionsCar.getAll());
  }


  viewDetail(event: number) {
    this.router.navigate([`cars/detail/${event}`])
  }

}
