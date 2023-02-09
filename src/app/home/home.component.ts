import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService],
})
export class AppHomeComponent implements OnInit {
  public oferta!: Oferta[];

  //  this.oferta = this.ofertaservice.getOfertas();

  constructor(private ofertaservice: OfertasService) {}

  public async loadCategories() {
    const categories$ = this.ofertaservice.getOfertas();
    this.oferta = await firstValueFrom(categories$);

    return this.oferta;
  }

  ngOnInit(): void {
    this.loadCategories();

    // this.ofertaservice
    //   .getOfertas()
    //   .then((ofertas: Oferta[]) => {
    //            this.oferta = ofertas;
    //   })
    //   .catch((erro) => console.log(erro));
    /* 
    
    fisrt = new OfertasService();

    jonh: any = [];
    
    this.fisrt.getOfertas().map((number) => this.jonh.push(number));
    console.log(`Este e o Arrey Jonathan`, this.jonh);       MANEIRA ERRADA DE EXTRAIR SERVICO USANDO O ANGULAR*/
  }
}
