import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { EnquireCarComponent } from 'src/app/shared/enquire-car/enquire-car.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
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
export class ContactUsComponent implements OnInit {
  modalRef!: NgbModalRef;

  constructor(
    private spinner: NgxSpinnerService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 3000);
  }

  openEnquiry() {
    this.modalRef = this.modalService.open(EnquireCarComponent, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
  }
}
