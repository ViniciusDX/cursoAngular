import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApontamentosComponent } from './component/admin/apontamentos/apontamentos.component';
import { FooterComponent } from './component/admin/footer/footer.component';
import { HeaderComponent } from './component/admin/header/header.component';
import { HomeComponent } from './component/admin/home/home.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ApontamentosComponent],
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
