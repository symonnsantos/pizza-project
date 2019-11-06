import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { MaisPedidosComponent } from './mais-pedidos/mais-pedidos.component';
import { BannerBaixarAppComponent } from './banner-baixar-app/banner-baixar-app.component';
import { BannerPedidoComponent } from './banner-pedido/banner-pedido.component';
import { BannerPrincipalComponent } from './banner-principal/banner-principal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    BannerPrincipalComponent,
    BannerPedidoComponent,
    BannerBaixarAppComponent,
    MaisPedidosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class HomeModule { }
