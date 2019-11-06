import { PedidosOnlineModule } from './pedidos-online/pedidos-online.module';
import { HomeModule } from './home/home.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosOnlineComponent } from './pedidos-online/pedidos-online.component';
import { LojasComponent } from './lojas/lojas.component';
import { ContatoComponent } from './contato/contato.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { OpcoesComponent } from './pedidos-online/opcoes/opcoes.component';
import { MontarPedidoComponent } from './pedidos-online/montar-pedido/montar-pedido.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LojasComponent,
    ContatoComponent,
    PaginaNaoEncontradaComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HomeModule,
    PedidosOnlineModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
