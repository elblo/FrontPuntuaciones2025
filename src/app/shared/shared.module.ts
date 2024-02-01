import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterOutlet,

  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
