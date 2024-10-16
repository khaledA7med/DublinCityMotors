import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
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
export class ViewStockComponent implements OnInit {
  filteredStock!: any[];

  filterForm!: FormGroup<any>;

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
    this.spinner.show();

    const filterData = this.filterService.getFilterData();
    if (filterData) {
      this.filterForm.patchValue({
        carMake: filterData.make,
        carModel: filterData.model,
        carYear: filterData.year,
      });

      console.log(this.filterForm.value);
    }

    // this.carsService.getCars(make, model, year).subscribe((x) => {
    //   console.log('cars filterd successfully', x);
    // });

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

  initFilterForm(): void {
    this.filterForm = new FormGroup({
      carMake: new FormControl(''),
      carModel: new FormControl(''),
      carYear: new FormControl(''),
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

  onFilter(filterForm: any) {
    console.log(filterForm);
  }
}
