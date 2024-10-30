import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
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
export class SoldComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  allCars: any[] = [];

  currentPage = 1;
  carsPerPage = 12;
  paginatedCars: any[] = [];

  constructor(
    private spinner: NgxSpinnerService,
    private carsService: CarsService
  ) {}

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.spinner.show();
    let sub = this.carsService.getSoldCars().subscribe({
      next: (res) => {
        this.allCars = res;
        this.paginateCars();
        this.spinner.hide();
      },
      error: (err) => {
        this.spinner.hide();
      },
    });
    this.subscription.push(sub);
  }

  get totalPages(): number {
    return Math.ceil(this.allCars.length / this.carsPerPage);
  }

  paginateCars() {
    const start = (this.currentPage - 1) * this.carsPerPage;
    const end = start + this.carsPerPage;
    this.paginatedCars = this.allCars.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateCars();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateCars();
    }
  }
  ngOnDestroy(): void {
    this.subscription && this.subscription.forEach((s) => s.unsubscribe());
  }
}
