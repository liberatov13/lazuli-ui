import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbalagemPageComponent } from './embalagem-page.component';

describe('EmbalagemPageComponent', () => {
  let component: EmbalagemPageComponent;
  let fixture: ComponentFixture<EmbalagemPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbalagemPageComponent]
    });
    fixture = TestBed.createComponent(EmbalagemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
