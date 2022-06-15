import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CarsService } from 'src/app/modules/cars/services/cars.service';
import * as actions from '../actions/car.actions';

@Injectable({
    providedIn: 'root'
})
export class CarEffects {
    constructor(
        private actions$: Actions,
        private carsService: CarsService,
    ) {}

    getAllCars$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(actions.getAll),
            mergeMap(() => {
                return this.carsService.getAllCars().pipe(
                    map( (res) => actions.getAllOK({payload: res.data}) ),
                    catchError((err) => of(actions.getAllFail({error: err})) )
                )
            })
        )
    });

}