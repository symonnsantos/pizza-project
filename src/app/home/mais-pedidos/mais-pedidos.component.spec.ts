import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisPedidosComponent } from './mais-pedidos.component';

describe('MaisPedidosComponent', () => {
  let component: MaisPedidosComponent;
  let fixture: ComponentFixture<MaisPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
