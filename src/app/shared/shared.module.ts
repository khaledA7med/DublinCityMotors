import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnquireCarModule } from './enquire-car/enquire-car.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarCardComponent } from './car-card/car-card.component';
import { RouterModule } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { GregorianPickerModule } from './gregorian-picker/gregorian-picker.module';

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
    GregorianPickerModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgSelectModule,
    NgSelectModule,
    FormsModule,
    EnquireCarModule,
    NgxSpinnerModule,
    CarCardComponent,
    NgbCarouselModule,
    GregorianPickerModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class SharedModule {}
