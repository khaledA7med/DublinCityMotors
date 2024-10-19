import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { CarsService } from '../services/pagesServices/cars.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent implements OnInit {
  @Input() allCars: any[] = [];

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private carsService: CarsService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    // this.getAllCars();
  }

  getCar(index: any) {
    this.sharedService.sendCarData(index);
    this.router.navigate(['/product']);
  }

  getAllCars() {
    this.spinner.show();
    this.carsService.getAllCars().subscribe({
      next: (res) => {
        this.allCars = res;
        console.log(this.allCars);
        this.spinner.hide();
      },
    });
  }
}
