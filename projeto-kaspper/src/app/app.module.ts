import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/admin/footer/footer.component';
import { HeaderComponent } from './component/admin/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/admin/home/home.component';
import { ApontamentosComponent } from './component/admin/apontamentos/apontamentos.component';
import { MenuComponent } from './component/shared/menu/menu.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ApontamentosComponent, MenuComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
  ],
})
export class AppModule {}
