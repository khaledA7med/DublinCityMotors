import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
    data: { title: 'Contact-Us' },
  },
];
@NgModule({
  declarations: [ContactUsComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class ContactUsModule {}