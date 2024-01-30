import { Component } from '@angular/core';
import { UserRanking } from '../../interface/user-ranking';
import { UserRankingService } from '../../service/user-ranking.service';

@Component({
  selector: 'app-ranking-fruta',
  templateUrl: './ranking-fruta.component.html',
  styleUrl: './ranking-fruta.component.css',
})
export class RankingFrutaComponent {
  
  users: UserRanking[] = [];

  constructor(private userRankingService: UserRankingService) {
    this.userRankingService.getRankingFruta().subscribe((users) => {
      this.users = users;
    });
  }

  actualizarTabla() {
    this.userRankingService.getRankingFruta().subscribe((users) => {
      this.users = users;
    });
}
}