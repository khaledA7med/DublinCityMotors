import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquireCarComponent } from './enquire-car.component';
import { GregorianPickerModule } from '../gregorian-picker/gregorian-picker.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [EnquireCarComponent],
  imports: [
    CommonModule,
    FormsModule,
    GregorianPickerModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
})
export class EnquireCarModule {}
