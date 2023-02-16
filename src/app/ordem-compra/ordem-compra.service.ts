import { Pedido } from '../shared/pedido.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrdemComporaService {
  constructor(private http: HttpClient) {}
  public efetivarComprar(pedido: Pedido): void {
    console.log(pedido);
  }
}
