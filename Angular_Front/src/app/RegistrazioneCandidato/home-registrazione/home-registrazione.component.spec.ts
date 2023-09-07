import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRegistrazioneComponent } from './home-registrazione.component';

describe('HomeRegistrazioneComponent', () => {
  let component: HomeRegistrazioneComponent;
  let fixture: ComponentFixture<HomeRegistrazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRegistrazioneComponent]
    });
    fixture = TestBed.createComponent(HomeRegistrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
