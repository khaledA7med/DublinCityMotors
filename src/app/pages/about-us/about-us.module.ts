import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent,
    data: { title: 'About-Us' },
  },
];
@NgModule({
  declarations: [AboutUsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, SharedModule],
})
export class AboutUsModule {}
