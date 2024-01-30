import { Component } from '@angular/core';
import { UserRanking } from '../../interface/user-ranking';
import { UserRankingService } from '../../service/user-ranking.service';

@Component({
  selector: 'app-ranking-reciclaje',
  templateUrl: './ranking-reciclaje.component.html',
  styleUrl: './ranking-reciclaje.component.css',
})
export class RankingReciclajeComponent {
  users: UserRanking[] = [];

  constructor(private userRankingService: UserRankingService) {
    this.userRankingService.getRankingReciclaje().subscribe((users) => {
      this.users = users;
    });
  }

  actualizarTabla() {
    this.userRankingService.getRankingReciclaje().subscribe((users) => {
      this.users = users;
    });
  }
}
