import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-pedido',
  templateUrl: './banner-pedido.component.html',
  styleUrls: ['./banner-pedido.component.css']
})
export class BannerPedidoComponent implements OnInit {  

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  monte(){
    this._route.navigate(['/pedidos-online/montar-pedido'])
  }

}
