import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRanking } from '../interface/user-ranking';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserRankingService {
  url: string = environment.URL_BASE;

  constructor(private http: HttpClient) {}

  getRankingFruta() {
    return this.http.get<UserRanking[]>(this.url + 'fruta');
  }

  getRankingReciclaje() {
    return this.http.get<UserRanking[]>(this.url + 'reciclaje');
  }
}
