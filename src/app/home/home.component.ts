import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
})
export class AppHomeComponent implements OnInit {
  fisrt = new OfertasService();

  jonh: any = [];

  constructor() {}

  ngOnInit(): void {
    /* this.fisrt.getOfertas().map((number) => this.jonh.push(number));
    console.log(`Este e o Arrey Jonathan`, this.jonh);       MANEIRA ERRADA DE EXTRAIR SERVICO USANDO O ANGULAR*/
  }
}
