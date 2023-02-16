import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { URL_API } from './app.api';

@Injectable()
export class OfertasService {
  // private ulr_api = 'http://localhost:3000/ofertas';

  constructor(private http: HttpClient) {}

  public getOfertas(): Observable<Oferta[]> {
    return this.http
      .get(`${URL_API}ofertas?destaque=true`)
      .pipe(map((resposta: any) => resposta));
  }

  public getOfertasPorCategoria(categoria: string) {
    return this.http
      .get(`${URL_API}ofertas?categoria=${categoria}`)
      .pipe(map((resposta: any) => resposta));
  }

  public getOfertasPorID(id: number) {
    return this.http
      .get(`${URL_API}ofertas?id=${id}`)
      .pipe(map((response: any) => response.shift())); //ou response[0]
  }

  public getComoUsarOfertaPorId(id: number) {
    return this.http.get(`${URL_API}como-usar?id=${id}`).pipe(
      map((resposta: any) => {
        return resposta[0].descricao;
      })
    );
  }

  public getOndeFicaPorId(id: number) {
    return this.http
      .get(`${URL_API}onde-fica?id=${id}`)
      .pipe(map((resposta: any) => resposta[0].descricao));
  }

  public pesquisaOfertas(termo: string): Observable<any> {
    return this.http
      .get(`${URL_API}ofertas?descricao_oferta_like=${termo}`)
      .pipe(
        retry(10),
        map((respota: any) => {
          return respota;
        })
      );
  }
}

// public getOfertas2(): Promise<Array<Oferta>> {
//   return new Promise((resolve, reject) => {
//     let deu_certo = true;
//     if (deu_certo) {
//       setTimeout(() => resolve(this.ofertas), 3000);
//     } else {
//       reject({ codigo_erro: 404, mensagem_erro: 'Servidor nao encontrado' });
//     }
//   })
//     .then((ofertas: any) => {
//       console.log('Primeiro then');
//       return ofertas;
//     })
//     .then((ofertas: Oferta[]) => {
//       console.log('Segundo then');
//       return new Promise((resolve2, reject2) => {
//         setTimeout(() => {
//           resolve2(ofertas);
//         }, 3000);
//       });
//     })
//     .then((ofertas: any) => {
//       console.log('Terceiro then execultado apos 3 seconds');
//       return ofertas;
//     });
// }

// public ofertas: Oferta[] = [
//   {
//     id: 1,
//     categoria: 'restaurante',
//     titulo: 'Super Burger',
//     descricao_oferta: 'Rodízio de Mini-hambúrger com opção de entrada.',
//     anunciante: 'Original Burger',
//     valor: 29.9,
//     destaque: true,
//     imagens: [
//       { url: '/assets/ofertas/1/img1.jpg' },
//       { url: '/assets/ofertas/1/img2.jpg' },
//       { url: '/assets/ofertas/1/img3.jpg' },
//       { url: '/assets/ofertas/1/img4.jpg' },
//     ],
//   },
//   {
//     id: 2,
//     categoria: 'restaurante',
//     titulo: 'Cozinha Mexicana',
//     descricao_oferta: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
//     anunciante: 'Mexicana',
//     valor: 32.9,
//     destaque: true,
//     imagens: [
//       { url: '/assets/ofertas/2/img1.jpg' },
//       { url: '/assets/ofertas/2/img2.jpg' },
//       { url: '/assets/ofertas/2/img3.jpg' },
//       { url: '/assets/ofertas/2/img4.jpg' },
//     ],
//   },
//   {
//     id: 4,
//     categoria: 'diversao',
//     titulo: 'Estância das águas',
//     descricao_oferta:
//       'Diversão garantida com piscinas, trilhas e muito mais.',
//     anunciante: 'Estância das águas',
//     valor: 31.9,
//     destaque: true,
//     imagens: [
//       { url: '/assets/ofertas/3/img1.jpg' },
//       { url: '/assets/ofertas/3/img2.jpg' },
//       { url: '/assets/ofertas/3/img3.jpg' },
//       { url: '/assets/ofertas/3/img4.jpg' },
//       { url: '/assets/ofertas/3/img5.jpg' },
//       { url: '/assets/ofertas/3/img6.jpg' },
//     ],
//   },
// ];
