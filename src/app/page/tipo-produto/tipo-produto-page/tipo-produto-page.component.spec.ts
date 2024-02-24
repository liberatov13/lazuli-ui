import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoProdutoPageComponent } from './tipo-produto-page.component';

describe('TipoProdutoPageComponent', () => {
  let component: TipoProdutoPageComponent;
  let fixture: ComponentFixture<TipoProdutoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoProdutoPageComponent]
    });
    fixture = TestBed.createComponent(TipoProdutoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
