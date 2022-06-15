import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarModel } from 'src/app/core/models/cars.model';
import { Response } from '../../../core/models/response.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private readonly URL = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  
  getAllCars(): Observable<Response<ICarModel[]>> {
    return this.http.get<Response<ICarModel[]>>(this.URL);
  }
  
}
