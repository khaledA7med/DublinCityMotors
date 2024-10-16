import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor() {}

  private filterData: any = {};

  setFilterData(make: string, model: string, year: string) {
    this.filterData = { make, model, year };
  }

  getFilterData() {
    return this.filterData;
  }

  clearFilterData() {
    this.filterData = {};
  }
}
