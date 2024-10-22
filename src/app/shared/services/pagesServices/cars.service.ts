import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private readonly env: string = environment.ApiUrl;

  constructor(private http: HttpClient) {}

  getAllCars(): Observable<any> {
    return this.http.get<any>(this.env + 'cars/all');
  }
  getCarsByFilter(make: string, model: string, year: number): Observable<any> {
    return this.http.post<any>(this.env + 'cars/filter', { make, model, year });
  }

  getCarById(data: any): Observable<any> {
    return this.http.post<any>(this.env + 'cars/getCarById', data);
  }

  enquireCar(data: any): Observable<any> {
    return this.http.post<any>(this.env + 'cars/addEnquiry', data);
  }
}
