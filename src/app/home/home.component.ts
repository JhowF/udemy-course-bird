import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService],
})
export class AppHomeComponent implements OnInit {
  public oferta!: Oferta[];

  constructor(private ofertaservice: OfertasService) {}

  ngOnInit(): void {
    //  this.oferta = this.ofertaservice.getOfertas();

    this.ofertaservice
      .getOfertas2()
      .then((ofertas: Oferta[]) => {
        console.log('function resolved after 3 seconds');
        this.oferta = ofertas;
      })
      .catch((erro) => console.log(erro));

    /* 
    
    fisrt = new OfertasService();

    jonh: any = [];
    
    this.fisrt.getOfertas().map((number) => this.jonh.push(number));
    console.log(`Este e o Arrey Jonathan`, this.jonh);       MANEIRA ERRADA DE EXTRAIR SERVICO USANDO O ANGULAR*/
  }
}
