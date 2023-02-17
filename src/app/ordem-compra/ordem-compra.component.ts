import { Component, OnInit } from '@angular/core';
import { OrdemComporaService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
@Component({
  selector: 'app-ordem-compra',
  templateUrl: 'ordem-compra.component.html',
  styleUrls: ['ordem-compra.component.css'],
  providers: [OrdemComporaService],
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra!: number;
  //Pedido
  public pedido: Pedido = new Pedido('', '', '', '');

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  public enderecoValido!: boolean;
  public numeroValido!: boolean;

  public formaPagamentoValido!: boolean;

  //Primetivate stage

  public enderecoPrimitivo: boolean = true;
  public numeroPrimitivo: boolean = true;
  public formapagamentoPrimitivo: boolean = true;

  //Control button buy
  public formEstado: string = 'disabled';

  constructor(public ordemCompraService: OrdemComporaService) {}

  ngOnInit(): void {
    // this.ordemCompraService.efetivarComprar();
  }

  atualizarEndereco(inputEndereco: string): void {
    this.endereco = inputEndereco.toLowerCase();

    this.enderecoPrimitivo = false;
    if (inputEndereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.buttonstate();
  }
  atualizarNumero(inputNumero: string): void {
    this.numeroPrimitivo = false;
    this.numero = inputNumero;
    if (inputNumero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

    this.buttonstate();
  }
  atualizarComplemento(inputcomplemento: string): void {
    this.complemento = inputcomplemento;

    this.buttonstate();
  }
  atualizaFormaPagamento(selectPagamento: string): void {
    this.formaPagamento = selectPagamento;

    this.formapagamentoPrimitivo = false;

    selectPagamento.length > 0
      ? (this.formaPagamentoValido = true)
      : (this.formaPagamentoValido = false);

    this.buttonstate();
  }

  public buttonstate(): void {
    if (
      this.enderecoValido === true &&
      this.numeroValido === true &&
      this.formaPagamentoValido === true
    ) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  public confirmaCompra(): void {
    this.pedido.endereco = this.endereco.replaceAll(' ', '.');
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;
    this.ordemCompraService
      .efetivarComprar(this.pedido)
      .subscribe((response: any) => (this.idPedidoCompra = response.id));
  }
}
