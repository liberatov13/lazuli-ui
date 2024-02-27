import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaPageComponent } from './marca-page.component';

describe('MarcaPageComponent', () => {
  let component: MarcaPageComponent;
  let fixture: ComponentFixture<MarcaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarcaPageComponent]
    });
    fixture = TestBed.createComponent(MarcaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
