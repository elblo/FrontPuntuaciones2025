import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRanking } from '../interface/user-ranking';
import { Environment } from '../../../../enviroment';

@Injectable({
  providedIn: 'root',
})
export class UserRankingService {
  url: string = Environment.URL_ENDPOINT;

  constructor(private http: HttpClient) {}

  getRankingFruta() {
    return this.http.get<UserRanking[]>(this.url + 'fruta');
  }

  getRankingReciclaje() {
    return this.http.get<UserRanking[]>(this.url + 'reciclaje');
  }
}
