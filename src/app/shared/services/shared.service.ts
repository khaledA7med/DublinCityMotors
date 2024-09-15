import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public carData = new BehaviorSubject<any>(null);
  // Observable to subscribe to the Subject
  carObservable = this.carData.asObservable();

  // Method to update the Subject with new data
  sendCarData(car: any) {
    this.carData.next(car);
  }
  constructor() { }
}
