import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-diversao',
  templateUrl: 'diversao.component.html',
  styleUrls: ['diversao.component.css'],
  providers: [OfertasService],
})
export class DiversaoComponent implements OnInit {
  categoyrfun!: Oferta[];

  constructor(public http: OfertasService) {}

  public async GetValueForFun() {
    const FunValue = this.http.getOfertasPorCategoria('diversao');
    this.categoyrfun = await firstValueFrom(FunValue);
    return this.categoyrfun;
  }

  ngOnInit() {
    this.GetValueForFun();
  }
}
