import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStockComponent } from './view-stock.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ViewStockComponent,
    data: { title: 'View-Stock' },
  },
];
@NgModule({
  declarations: [ViewStockComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ViewStockModule {}
