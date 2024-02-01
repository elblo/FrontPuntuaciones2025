import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRanking } from '../interface/user-ranking';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserRankingService {




  url: string = environment.URL_BASE;

  logged:boolean = false;

  constructor(private http: HttpClient) {}

  getRankingFruta() {
    return this.http.get<UserRanking[]>(this.url + 'fruta');
  }

  getRankingReciclaje() {
    return this.http.get<UserRanking[]>(this.url + 'reciclaje');
  }

  resetFruta() {
    this.http.delete(this.url + 'fruta').subscribe();
    alert('Datos de fruta correctamente')
  }
  resetReciclaje() {
    this.http.delete(this.url + 'reciclaje').subscribe();
    alert('Datos de basura correctamente')
  }
}
