import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { EnquireCarComponent } from 'src/app/shared/enquire-car/enquire-car.component';
import { SharedService } from 'src/app/shared/services/shared.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/app/shared/services/pagesServices/cars.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
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
export class ProductDetailsComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = [];
  car_id!: any;

  images = [
    '../../../assets/images/stock/1.jpg',
    '../../../assets/images/stock/2.jpg',
    '../../../assets/images/stock/3.jpg',
    '../../../assets/images/stock/4.jpg',
    '../../../assets/images/stock/1.jpg',
    '../../../assets/images/stock/2.jpg',
    '../../../assets/images/stock/3.jpg',
    '../../../assets/images/stock/4.jpg',
    '../../../assets/images/stock/1.jpg',
    '../../../assets/images/stock/2.jpg',
    '../../../assets/images/stock/3.jpg',
    '../../../assets/images/stock/4.jpg',
  ];

  showNavigationArrows = true;
  showNavigationIndicators = true;

  public album: Array<any> = [];
  modalRef!: NgbModalRef;
  selectedCar: any;
  isInteriorCollapsed: boolean = false;
  isExteriorCollapsed: boolean = false;
  isTechCollapsed: boolean = false;
  isSafetyCollapsed: boolean = false;
  constructor(
    private sharedService: SharedService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private carsService: CarsService,
    private messages: MessagesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      if (res.get('id')) {
        this.car_id = res.get('id')!;
        this.getCar(this.car_id);
      }
    });
  }

  openCarModal() {
    this.modalRef = this.modalService.open(EnquireCarComponent, {
      backdrop: 'static',
      size: 'lg',
      centered: true,
    });

    this.modalRef.componentInstance.carEnquiry = this.selectedCar;
  }

  getCar(id: any) {
    this.spinner.show();
    let data = {
      car_id: id,
    };

    let sub = this.carsService.getCarById(data).subscribe({
      next: (res) => {
        if (res) {
          this.selectedCar = res;
          this.spinner.hide();
        }
      },
      error: (err) => {
        this.messages.toast('Failed To load data', 'error');
        this.spinner.hide();
      },
    });

    this.subscription.push(sub);
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.forEach((s) => s.unsubscribe());
  }
}
