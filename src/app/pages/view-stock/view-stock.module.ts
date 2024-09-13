import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStockComponent } from './view-stock.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ViewStockComponent,
  },
];
@NgModule({
  declarations: [ViewStockComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class ViewStockModule {}
