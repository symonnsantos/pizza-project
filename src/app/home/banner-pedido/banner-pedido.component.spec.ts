import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPedidoComponent } from './banner-pedido.component';

describe('BannerPedidoComponent', () => {
  let component: BannerPedidoComponent;
  let fixture: ComponentFixture<BannerPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
