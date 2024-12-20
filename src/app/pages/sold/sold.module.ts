import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoldComponent } from './sold.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SoldComponent,
  },
];

@NgModule({
  declarations: [
    SoldComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class SoldModule { }
