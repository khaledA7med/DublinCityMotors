import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquireCarComponent } from './enquire-car.component';
import { GregorianPickerModule } from '../gregorian-picker/gregorian-picker.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [EnquireCarComponent],
  imports: [CommonModule, FormsModule, GregorianPickerModule, NgSelectModule],
})
export class EnquireCarModule {}
