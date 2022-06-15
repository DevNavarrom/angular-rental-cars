import { createReducer, on } from '@ngrx/store';
import { ICarModel } from 'src/app/core/models/cars.model';
import * as actions from '../actions/car.actions';


export interface CarState {
    cars: ICarModel[];
    loading: boolean;
    error: string;
}

const initialState: CarState = {
    cars: new Array<ICarModel>(),
    loading: false,
    error: ''
}

export const carReducer = createReducer(initialState, 
    on( actions.getAll, (state, action) => ({...state, loading: true}) ),
    on( actions.getAllOK, (state, action) => ({...state, cars: action.payload, loading: false, error: ''}) ),
    on( actions.getAllFail, (state, action) => ({...state, loading: false, error: action.error}) ),
)