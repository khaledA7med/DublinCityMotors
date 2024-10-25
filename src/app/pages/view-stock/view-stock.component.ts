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

  cars = [{ name: 'Audi' }, { name: 'BMW' }, { name: 'Mercedes' }];

  models = [{ name: 'A4' }, { name: 'X5' }, { name: 'C-Class' }];

  years = [{ name: '2020' }, { name: '2021' }, { name: '2022' }];

  selectedSort = this.Sort[0].name;
  constructor(
    private offcanvasService: NgbOffcanvas,
    private spinner: NgxSpinnerService,
    private filterService: FilterService,
    private carsService: CarsService
  ) {}

  ngOnInit(): void {
    this.initFilterForm();

    const filterData = this.filterService.getFilterData();
    console.log(filterData);

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
      make: new FormControl(''),
      model: new FormControl(''),
      regYear: new FormControl(null),
    });
  }

  get f() {
    return this.filterForm.controls;
  }

  openFilter() {
    this.offcanvasService.open(this.content, { position: 'start' });
  }
  onSortChange() {
    console.log(this.selectedSort);
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
  }

  getAllCars() {
    this.spinner.show();
    let sub = this.carsService.getAllCars().subscribe({
      next: (res) => {
        this.allCars = res;

        this.spinner.hide();
      },
    });
    this.subscription.push(sub);
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.forEach((s) => s.unsubscribe());
  }
}
