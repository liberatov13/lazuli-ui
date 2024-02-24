import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProdutoFormComponent } from './tipo-produto-form.component';

describe('TipoProdutoFormComponent', () => {
  let component: TipoProdutoFormComponent;
  let fixture: ComponentFixture<TipoProdutoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoProdutoFormComponent]
    });
    fixture = TestBed.createComponent(TipoProdutoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
