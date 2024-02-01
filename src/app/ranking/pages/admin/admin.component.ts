import { Component, ViewChild } from '@angular/core';
import { UserRankingService } from '../../service/user-ranking.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {


  logged: boolean = false;

  constructor(private service: UserRankingService) {
    this.logged = service.logged;
  }


  login(user: string, password: string) {
    console.log(user, password);

    if (user == 'dptoInformatica' && password == 'dptoInformatica.2324') {
      this.logged = true;
      this.service.logged = true;
    }else{
      alert('Usuario o contraseña incorrectos')
    }
  }
  borraDatosReciclaje() {
    this.service.resetReciclaje();
  }
  borraDatosFruta() {
    this.service.resetFruta();

  }

}
