import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    //component: LoginComponent,
    loadComponent: () =>
      import('./component/login/login.component').then((x) => x.LoginComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('./component/admin/home/home.component').then(
        (x) => x.HomeComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
