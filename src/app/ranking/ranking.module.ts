import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingRoutingModule } from './ranking-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RankingFrutaComponent } from './pages/ranking-fruta/ranking-fruta.component';
import { RankingReciclajeComponent } from './pages/ranking-reciclaje/ranking-reciclaje.component';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    RankingFrutaComponent,
    RankingReciclajeComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RankingRoutingModule
  ]
})
export class RankingModule { }
