import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
})
export class OndeFicaComponent implements OnInit {
  ondeFica!: string;

  constructor(
    private route: ActivatedRoute,
    public ofertaService: OfertasService
  ) {}

  ngOnInit(): void {
    this.getOndeFica();
  }

  public async getOndeFica() {
    this.route.parent?.params.subscribe(async (resposta: any) => {
      let pesquisandoOnApi = this.ofertaService.getOndeFicaPorId(resposta.id);
      let ondeFicaDescricao = await firstValueFrom(pesquisandoOnApi);
      this.ondeFica = ondeFicaDescricao;
    });
  }

  // let currentlyID = this.route.snapshot.params['id'];
  // let idOferta = this.ofertasiverce.getOfertasPorID(currentlyID);
  // this.oferta = await firstValueFrom(idOferta);
  // return this.oferta;
}
