import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { EnquireCarComponent } from 'src/app/shared/enquire-car/enquire-car.component';
import { SharedService } from 'src/app/shared/services/shared.service';
import { trigger, style, animate, transition } from '@angular/animations';

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
export class ProductDetailsComponent implements OnInit {
  public album: Array<any> = [];
  modalRef!: NgbModalRef;
  selectedCar: any;
  isExteriorCollapsed: boolean = false;
  isTechCollapsed: boolean = false;
  isSafetyCollapsed: boolean = false;
  constructor(
    private sharedService: SharedService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.sharedService.carObservable.subscribe((car) => {
      this.selectedCar = car;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  openCarModal() {
    this.modalRef = this.modalService.open(EnquireCarComponent, {
      backdrop: 'static',
      size: 'lg',
      centered: true,
    });
  }
}
