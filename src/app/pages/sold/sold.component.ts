import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CarsService } from 'src/app/shared/services/pagesServices/cars.service';

@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styleUrls: ['./sold.component.scss'],
  animations: [
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate(
          '1500ms ease-out',
          style({ transform: 'scale(1)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate('1500ms ease-in', style({ transform: 'scale(0)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class SoldComponent implements OnInit {
  allCars: any[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    private carsService: CarsService
  ) {}
  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.spinner.show();
    this.carsService.getSoldCars().subscribe({
      next: (res) => {
        this.allCars = res;
        console.log(this.allCars);
        this.spinner.hide();
      },
      error: (err) => {
        this.spinner.hide();
      },
    });
  }
}
