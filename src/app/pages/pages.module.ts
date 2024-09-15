import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedService } from '../shared/services/shared.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  providers:[SharedService]
})
export class PagesModule { }
