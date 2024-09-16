import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { EnquireCarModule } from './enquire-car/enquire-car.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarCardComponent } from './car-card/car-card.component';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CarCardComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    RouterModule,
    FormsModule,
    EnquireCarModule,
    NgxSpinnerModule,
    NgbCarouselModule,
  ],
  exports: [
    NgSelectModule,
    NgSelectModule,
    FormsModule,
    EnquireCarModule,
    NgxSpinnerModule,
    CarCardComponent,
    NgbCarouselModule,
  ],
  providers: [],
})
export class SharedModule {}
