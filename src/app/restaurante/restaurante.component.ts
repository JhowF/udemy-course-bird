import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-restaurante',
  templateUrl: 'restaurante.component.html',
  styleUrls: ['restaurante.component.css'],
  providers: [OfertasService],
})
export class RestauranteComponent implements OnInit {
  ofertacategoria!: Oferta[];

  constructor(private ofertaService: OfertasService) {}

  public async loadForCatecori() {
    const Categoria = this.ofertaService.getOfertasPorCategoria('restaurante');
    this.ofertacategoria = await firstValueFrom(Categoria);

    return this.ofertacategoria;
  }
  ngOnInit() {
    this.loadForCatecori();
  }
}
