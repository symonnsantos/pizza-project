import { MontarPedidoComponent } from './pedidos-online/montar-pedido/montar-pedido.component';
import { CardapioComponent } from './pedidos-online/cardapio/cardapio.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ContatoComponent } from './contato/contato.component';
import { LojasComponent } from './lojas/lojas.component';
import { PedidosOnlineComponent } from './pedidos-online/pedidos-online.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pedidos-online', component: PedidosOnlineComponent },
  { path: 'pedidos-online/cardapio', component: CardapioComponent },
  { path: 'pedidos-online/montar-pedido', component: MontarPedidoComponent },
  { path: 'lojas', component: LojasComponent },
  { path: 'contato', component: ContatoComponent },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
