import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontarPedidoComponent } from './montar-pedido.component';

describe('MontarPedidoComponent', () => {
  let component: MontarPedidoComponent;
  let fixture: ComponentFixture<MontarPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontarPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
