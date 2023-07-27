import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/admin/home/home.component';
import { ApontamentosComponent } from './component/admin/apontamentos/apontamentos.component';
import { MenuComponent } from './component/shared/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'apontamentos',
    component: ApontamentosComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    // loadComponent: () =>
    //   import('./component/login/login.component').then((x) => x.LoginComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
