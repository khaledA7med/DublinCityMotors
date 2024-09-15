import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  public album: Array<any> = [];
  constructor(private _lightbox: Lightbox , private sharedService: SharedService){
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
  selectedCar :any
  ngOnInit(): void {
    this.sharedService.carObservable.subscribe((car) => {
      this.selectedCar = car 
    });
    console.log(this.selectedCar);
    
  }

  // Open lightbox gallery
  open(index: number): void {
      
    this._lightbox.open(this.album, index);
  }

  // Close lightbox gallery
  close(): void {
    this._lightbox.close();
  }
}
