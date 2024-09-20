import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { EnquireCarComponent } from 'src/app/shared/enquire-car/enquire-car.component';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public album: Array<any> = [];
  modalRef!: NgbModalRef;
  isExteriorCollapsed :boolean = false;
  isTechCollapsed :boolean = false;
  isSafetyCollapsed :boolean = false;
  constructor(
    private sharedService: SharedService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) {
    // for (let i = 1; i <= 4; i++) {
    //   const src = 'demo/img/image' + i + '.jpg';
    //   const caption = 'Image ' + i + ' caption here';
    //   const thumb = 'demo/img/image' + i + '-thumb.jpg';
    //   const album = {
    //      src: src,
    //      caption: caption,
    //      thumb: thumb
    //   };
    //   this.album.push(album);
    // }
  }
  selectedCar: any;
  ngOnInit(): void {
    this.spinner.show();
    this.sharedService.carObservable.subscribe((car) => {
      this.selectedCar = car;
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 1000);
    });
  }

  openCarModal() {
    this.modalRef = this.modalService.open(EnquireCarComponent, {
      backdrop: 'static',
      size: 'lg',
      centered: true,
      // modalDialogClass: "task-preview",
      // backdropClass: "modal-backdrop-preview",
    });
  }
}
