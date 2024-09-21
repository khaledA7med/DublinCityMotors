import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.scss'],
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
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

  openFilter() {
    this.offcanvasService.open(this.content, { position: 'start' });
  }
  onSortChange() {
    console.log(this.selectedSort);
  }
}
