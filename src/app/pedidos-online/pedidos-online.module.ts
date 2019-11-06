import { PedidosOnlineComponent } from './pedidos-online.component';
import { OpcoesComponent } from './opcoes/opcoes.component';
import { MontarPedidoComponent } from './montar-pedido/montar-pedido.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioComponent } from './cardapio/cardapio.component';



@NgModule({
  declarations: [
    MontarPedidoComponent,
    OpcoesComponent,
    PedidosOnlineComponent,
    CardapioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PedidosOnlineModule { }
