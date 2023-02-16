import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';
import { firstValueFrom, map, Observable } from 'rxjs';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
})
export class ComoUsarComponent implements OnInit {
  howtoUse!: string;
  constructor(private route: ActivatedRoute, public oferta: OfertasService) {}

  ngOnInit(): void {
    this.GetvalueID();
  }

  public async GetvalueID() {
    this.route.parent?.params.subscribe(async (resposta: any) => {
      let PesquisandoOnApi = this.oferta.getComoUsarOfertaPorId(resposta.id);
      let ComousaDescricao = await firstValueFrom(PesquisandoOnApi);
      this.howtoUse = ComousaDescricao;
    });
  }
}

/*
this.route.parent.params.subscribe(async (reponse: any) => {
      reponse.id;
      console.log(`This is the response`, reponse.id);
      let idOferta = this.oferta.getComoUsarOfertaPorId(reponse.id);
      this.howtoUse = await firstValueFrom(idOferta);
      return this.howtoUse;
    });*/
