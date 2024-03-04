import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadeMedidaListComponent } from './unidade-medida-list.component';

describe('UnidadeMedidaListComponent', () => {
  let component: UnidadeMedidaListComponent;
  let fixture: ComponentFixture<UnidadeMedidaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadeMedidaListComponent]
    });
    fixture = TestBed.createComponent(UnidadeMedidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
