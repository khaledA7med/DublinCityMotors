import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';
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

  constructor(private _lightbox: Lightbox , private sharedService: SharedService , private modalService: NgbModal){
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
    this.sharedService.carObservable.subscribe((car) => {
      this.selectedCar = car;
    });
  }

  openCarModal(){
    this.modalRef = this.modalService.open(EnquireCarComponent, {
      backdrop: "static",
      size: "lg",
      centered: true,
      // modalDialogClass: "task-preview",
      // backdropClass: "modal-backdrop-preview",
    });
  }
}
