import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnquireCarModule } from './Components/enquire-car/enquire-car.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarCardComponent } from './Components/car-card/car-card.component';
import { RouterModule } from '@angular/router';
import {
  NgbCarouselModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';
import { GregorianPickerModule } from './Components/gregorian-picker/gregorian-picker.module';
import { TermsConditionsComponent } from './Components/terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [CarCardComponent, TermsConditionsComponent],
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
    NgbPaginationModule,
  ],
  exports: [
    NgSelectModule,
    NgSelectModule,
    FormsModule,
    EnquireCarModule,
    NgxSpinnerModule,
    CarCardComponent,
    TermsConditionsComponent,
    NgbCarouselModule,
    GregorianPickerModule,
    ReactiveFormsModule,
    NgbPaginationModule,
  ],
  providers: [],
})
export class SharedModule {}
