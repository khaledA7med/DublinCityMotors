import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedService } from '../shared/services/shared.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PagesRoutingModule, SharedModule],
  providers: [SharedService],
})
export class PagesModule {}
