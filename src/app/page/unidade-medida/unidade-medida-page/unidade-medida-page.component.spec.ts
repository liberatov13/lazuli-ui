import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeMedidaPageComponent } from './unidade-medida-page.component';

describe('UnidadeMedidaPageComponent', () => {
  let component: UnidadeMedidaPageComponent;
  let fixture: ComponentFixture<UnidadeMedidaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadeMedidaPageComponent]
    });
    fixture = TestBed.createComponent(UnidadeMedidaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
