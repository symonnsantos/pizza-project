import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-online',
  templateUrl: './pedidos-online.component.html',
  styleUrls: ['./pedidos-online.component.css']
})
export class PedidosOnlineComponent implements OnInit {

  constructor(
    private _route: Router
  ) { }

  ngOnInit() {
  }

  verCardapio() {
    this._route.navigate(['pedidos-online/cardapio'])
  }

  montar() {
    this._route.navigate(['pedidos-online/montar-pedido'])
  }

}
