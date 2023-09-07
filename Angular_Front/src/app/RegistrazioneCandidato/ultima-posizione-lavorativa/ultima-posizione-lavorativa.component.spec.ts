import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaPosizioneLavorativaComponent } from './ultima-posizione-lavorativa.component';

describe('UltimaPosizioneLavorativaComponent', () => {
  let component: UltimaPosizioneLavorativaComponent;
  let fixture: ComponentFixture<UltimaPosizioneLavorativaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimaPosizioneLavorativaComponent]
    });
    fixture = TestBed.createComponent(UltimaPosizioneLavorativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
