import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.store';
import { ICarModel } from './../../../../core/models/cars.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();

  private id: number = 0;
  cars$: Observable<ICarModel[]> = this.store.select(state => state.cars.cars);
  car: ICarModel = {};

  constructor(
    private routeParam: ActivatedRoute,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.id = this.routeParam.snapshot.params['id'];
    
    this.subscription = this.cars$.subscribe(cars => {
      this.car = cars.find(car => car.id == this.id) as ICarModel;
    });
    
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
