import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RankingFrutaComponent } from './pages/ranking-fruta/ranking-fruta.component';
import { RankingReciclajeComponent } from './pages/ranking-reciclaje/ranking-reciclaje.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inicio',
        component: HomeComponent,
      },
      {
        path: 'rankingFruta',
        component: RankingFrutaComponent,
      },
      {
        path: 'rankingReciclaje',
        component: RankingReciclajeComponent,

      },
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: '**',
        redirectTo: 'inicio',
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RankingRoutingModule { }
