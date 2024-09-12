import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: LayoutComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./extra-pages/extra-pages.module').then(
        (m) => m.ExtraPagesModule
      ),
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  // {
  //   path: "**",
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
