import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterOutlet,
    
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
