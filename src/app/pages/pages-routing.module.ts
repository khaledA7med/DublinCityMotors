import { SoldModule } from './sold/sold.module';
import { ProductDetailsModule } from './product-details/product-details.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'view-stock',
    loadChildren: () =>
      import('./view-stock/view-stock.module').then((m) => m.ViewStockModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./product-details/product-details.module').then((m) => m.ProductDetailsModule),
  },
  {
    path: 'recently-sold',
    loadChildren: () =>
      import('./sold/sold.module').then((m) => m.SoldModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
