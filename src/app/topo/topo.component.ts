import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import {
  debounceTime,
  Observable,
  Subject,
  switchMap,
  distinctUntilChanged,
  catchError,
} from 'rxjs';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas!: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertaService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        console.log('Kayup Caracter API:');
        if (termo.trim() === '') {
          return Array.of([]);
        }
        return this.ofertaService.pesquisaOfertas(termo);
      }),
      catchError((err: any) => {
        console.log(err);
        return Array.of([]);
      })
    );
  }

  public pesquisa(termoDaPesquisa: string): void {
    this.subjectPesquisa.next(termoDaPesquisa);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }
}

//   next(position) {
//     console.log('Current Position: ', position);
//   },
//   error(msg) {
//     console.log('Error Getting Location: ', msg);
//   },
//   complete() {
//     console.log('The project was okay');
//   },
// }

/*

function to return a event | how take a input value

public pesquisa(event: Event): void {
  console.log((<HTMLInputElement>event.target).value);
}

*/
