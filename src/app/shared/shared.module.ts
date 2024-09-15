import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { EnquireCarModule } from './enquire-car/enquire-car.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarCardComponent } from './car-card/car-card.component';
import { RouterModule } from '@angular/router';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    CarCardComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    RouterModule ,
    FormsModule,
    EnquireCarModule,
    NgxSpinnerModule,
  ],
  exports: [
    NgSelectModule,
    NgSelectModule,
    FormsModule,
    EnquireCarModule,
    NgxSpinnerModule,
    CarCardComponent
  ],
  providers: [],
})
export class SharedModule {}
