import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { Filter } from 'src/app/shared/models/carFillter';
import { FilterService } from 'src/app/shared/services/filter.service';
import { CarsService } from 'src/app/shared/services/pagesServices/cars.service';

@Component({
  selector: 'app-view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.scss'],
  encapsulation: ViewEncapsulation.None,
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
export class ViewStockComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  filteredStock!: any[];

  allCars: any[] = [];

  filterForm!: FormGroup<Filter>;

  @ViewChild('content') content!: ElementRef;
  Sort = [
    { name: 'Sort by price: Low To Heigh' },
    { name: 'Sort by price: Heigh To Low' },
    { name: 'Sort by Age: Oldest First' },
    { name: 'Sort by Age: Newest First' },
  ];

  makes = [];

  models = [];

  years = [
    { name: '1990' },
    { name: '1991' },
    { name: '1992' },
    { name: '1993' },
    { name: '1994' },
    { name: '1995' },
    { name: '1996' },
    { name: '1997' },
    { name: '1998' },
    { name: '1999' },
    { name: '2000' },
    { name: '2001' },
    { name: '2002' },
    { name: '2003' },
    { name: '2004' },
    { name: '2005' },
    { name: '2006' },
    { name: '2007' },
    { name: '2008' },
    { name: '2009' },
    { name: '2010' },
    { name: '2011' },
    { name: '2012' },
    { name: '2013' },
    { name: '2014' },
    { name: '2015' },
    { name: '2016' },
    { name: '2017' },
    { name: '2018' },
    { name: '2019' },
    { name: '2020' },
    { name: '2021' },
    { name: '2022' },
    { name: '2023' },
    { name: '2024' },
    { name: '2025' },
    { name: '2026' },
    { name: '2027' },
    { name: '2028' },
    { name: '2029' },
    { name: '2030' },
    { name: '2031' },
    { name: '2032' },
    { name: '2033' },
    { name: '2034' },
    { name: '2035' },
    { name: '2036' },
    { name: '2037' },
    { name: '2038' },
    { name: '2039' },
    { name: '2040' },
    { name: '2041' },
    { name: '2042' },
    { name: '2043' },
    { name: '2044' },
    { name: '2045' },
    { name: '2046' },
    { name: '2047' },
    { name: '2048' },
    { name: '2049' },
    { name: '2050' },
  ];

  selectedSort = this.Sort[0].name;
  constructor(
    private offcanvasService: NgbOffcanvas,
    private spinner: NgxSpinnerService,
    private filterService: FilterService,
    private carsService: CarsService
  ) {}

  ngOnInit(): void {
    this.initFilterForm();
    this.getMake();

    const filterData = this.filterService.getFilterData();
    if (filterData.length !== 0) {
      this.filterForm.patchValue({
        make: filterData[0],
        model: filterData[1],
        regYear: filterData[2],
      });

      this.onFilter();
    } else {
      this.getAllCars();
    }
  }

  initFilterForm(): void {
    this.filterForm = new FormGroup<Filter>({
      make: new FormControl(null),
      model: new FormControl(null),
      regYear: new FormControl(null),
    });
  }

  get f() {
    return this.filterForm.controls;
  }

  currentPage = 1;
  carsPerPage = 12;
  paginatedCars: any[] = [];

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

  openFilter() {
    this.offcanvasService.open(this.content, { position: 'start' });
  }
  onSortChange() {
    switch (this.selectedSort) {
      case 'Sort by price: Low To High':
        this.allCars.sort((a: any, b: any) => a.price - b.price);
        break;
      case 'Sort by price: High To Low':
        this.allCars.sort((a: any, b: any) => b.price - a.price);
        break;
      case 'Sort by Age: Oldest First':
        this.allCars.sort((a: any, b: any) => a.age - b.age);
        break;
      case 'Sort by Age: Newest First':
        this.allCars.sort((a: any, b: any) => b.age - a.age);
        break;
    }
    this.currentPage = 1; // Reset to first page after sorting
    this.paginateCars();
  }

  onFilter() {
    this.spinner.show();
    this.carsService
      .getCarsByFilter(
        this.f.make?.value!,
        this.f.model?.value!,
        +this.f.regYear.value!
      )
      .subscribe({
        next: (res) => {
          this.allCars = res;
          this.spinner.hide();
        },
      });
    this.currentPage = 1; // Reset to first page after sorting
    this.paginateCars();
  }

  getMake() {
    this.carsService.getCarMake().subscribe((res) => {
      this.makes = res;
    });
  }

  getModel(id: number) {
    this.carsService.getCarModel(id).subscribe((res) => {
      this.models = res;
    });
  }

  getAllCars() {
    this.spinner.show();
    let sub = this.carsService.getAllCars().subscribe({
      next: (res) => {
        this.allCars = res;
        this.paginateCars();
        this.spinner.hide();
      },
    });
    this.subscription.push(sub);
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.forEach((s) => s.unsubscribe());
  }
}
