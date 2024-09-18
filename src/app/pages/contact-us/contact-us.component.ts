import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { EnquireCarComponent } from 'src/app/shared/enquire-car/enquire-car.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
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
