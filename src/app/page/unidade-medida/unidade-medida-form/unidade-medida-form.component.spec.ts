import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeMedidaFormComponent } from './unidade-medida-form.component';

describe('UnidadeMedidaFormComponent', () => {
  let component: UnidadeMedidaFormComponent;
  let fixture: ComponentFixture<UnidadeMedidaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadeMedidaFormComponent]
    });
    fixture = TestBed.createComponent(UnidadeMedidaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
