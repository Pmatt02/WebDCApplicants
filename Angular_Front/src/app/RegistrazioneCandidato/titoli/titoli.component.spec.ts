import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitoliComponent } from './titoli.component';

describe('TitoliComponent', () => {
  let component: TitoliComponent;
  let fixture: ComponentFixture<TitoliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitoliComponent]
    });
    fixture = TestBed.createComponent(TitoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
