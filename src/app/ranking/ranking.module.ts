import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RankingFrutaComponent } from './pages/ranking-fruta/ranking-fruta.component';
import { RankingReciclajeComponent } from './pages/ranking-reciclaje/ranking-reciclaje.component';
import {  HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './pages/admin/admin.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    RankingFrutaComponent,
    RankingReciclajeComponent,
    AdminComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RankingRoutingModule,
    SharedModule
  ]
})
export class RankingModule { }
