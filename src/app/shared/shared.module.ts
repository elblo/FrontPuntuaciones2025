import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { SkeletonComponent } from './component/skeleton/skeleton.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterOutlet,

  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SkeletonComponent
  ]
})
export class SharedModule { }
