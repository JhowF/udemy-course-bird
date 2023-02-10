import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: 'oferta.component.html',
  styleUrls: ['oferta.component.css'],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit {
  private route!: ActivatedRoute;
  oferta!: Oferta;

  constructor(route: ActivatedRoute, private ofertasiverce: OfertasService) {
    this.route = route;
  }

  public async loadId() {
    let currentlyID = this.route.snapshot.params['id'];
    let idOferta = this.ofertasiverce.getOfertasPorID(currentlyID);
    this.oferta = await firstValueFrom(idOferta);
    return this.oferta;
  }

  ngOnInit(): void {
    this.loadId();
    //subscribe mothod
    //this.route.params.subscribe((parametro: any) => console.log(parametro));
  }
}
