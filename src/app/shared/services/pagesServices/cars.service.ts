import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}
  getCars(
    make: string,
    model: string,
    year: string
  ): Observable<HttpResponse<any>> {
    return this.http.post<any>('', { make, model, year });
  }
}
