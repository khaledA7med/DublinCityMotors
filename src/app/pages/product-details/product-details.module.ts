import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LightboxModule } from 'ngx-lightbox';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    LightboxModule,
    NgbNavModule
  ],
})
export class ProductDetailsModule { }
