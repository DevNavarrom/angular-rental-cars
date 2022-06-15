import { createAction, props } from '@ngrx/store';
import { ICarModel } from './../../core/models/cars.model';


export const getAll = createAction( '[Cars component] GET_ALL' );
export const getAllOK = createAction( '[Cars component] GET_ALL_OK', props<{payload: ICarModel[]}>() );
export const getAllFail = createAction( '[Cars component] GET_ALL_FAIL', props<{error: string}>() );