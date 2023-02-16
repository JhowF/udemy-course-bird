import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: 'oferta.component.html',
  styleUrls: ['oferta.component.css'],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit, OnDestroy {
  private route!: ActivatedRoute;
  oferta!: Oferta;
  public secondes!: any;
  private tempoObservableSubscription!: Subscription;
  private meuObservableTesteSubscription!: Subscription;

  constructor(route: ActivatedRoute, private ofertasiverce: OfertasService) {
    this.route = route;
  }

  public async loadId() {
    this.route.params.subscribe(async (parametros: any) => {
      parametros.id;
      let idOferta = this.ofertasiverce.getOfertasPorID(parametros.id);
      this.oferta = await firstValueFrom(idOferta);
      return this.oferta;
    });
  }

  ngOnInit(): void {
    this.loadId();
  }
  ngOnDestroy(): void {}
}

//How to use Observable / Subscribe

//Simple way

//subscribe mothod
//this.route.params.subscribe((parametro: any) => console.log(parametro));

//Completed way

// this.route.params.subscribe({
//   next(position) {
//     console.log('Current Position: ', position);
//   },
//   error(msg) {
//     console.log('Error Getting Location: ', msg);
//   },
//   complete() {
//     console.log('The project was okay');
//   },
// });

// How to use interval and Take

/*
const numbers = interval(3000);

    const takeFourNumbers = numbers.pipe(take(10));

    numbers.subscribe((x) => {
      this.route.params.subscribe({
        next(position) {
          console.log('Currente Position: ', position);
        },
      });
    });

    */

/*
     ngOnInit(): void {
    this.loadId();
    const numbers = interval(3000);

    this.tempoObservableSubscription = numbers.subscribe((x) => {
      console.log(x);
    });

    let meuObservableTeste = new Observable((observer) => {
      observer.next(10);
      observer.next(5);
      observer.complete();
      observer.error('One err was found');
    });

    this.meuObservableTesteSubscription = meuObservableTeste.subscribe({
      next: (param: any) => {
        console.log(param + 5);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('This process was execulted with sucess');
      },
    });
  }
  ngOnDestroy(): void {
    this.meuObservableTesteSubscription.unsubscribe();
    this.tempoObservableSubscription.unsubscribe();
  }

  */
