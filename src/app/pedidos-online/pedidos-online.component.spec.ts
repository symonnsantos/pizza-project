import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosOnlineComponent } from './pedidos-online.component';

describe('PedidosOnlineComponent', () => {
  let component: PedidosOnlineComponent;
  let fixture: ComponentFixture<PedidosOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedidosOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
