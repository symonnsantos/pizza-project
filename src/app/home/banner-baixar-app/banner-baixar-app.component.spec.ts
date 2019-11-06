import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBaixarAppComponent } from './banner-baixar-app.component';

describe('BannerBaixarAppComponent', () => {
  let component: BannerBaixarAppComponent;
  let fixture: ComponentFixture<BannerBaixarAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerBaixarAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerBaixarAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
