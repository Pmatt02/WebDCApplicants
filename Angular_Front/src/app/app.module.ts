import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeRegistrazioneComponent } from './RegistrazioneCandidato/home-registrazione/home-registrazione.component';

import { AnagraficaComponent } from './RegistrazioneCandidato/anagrafica/anagrafica.component';
import { TitoliComponent } from './RegistrazioneCandidato/titoli/titoli.component';
import { UltimaPosizioneLavorativaComponent } from './RegistrazioneCandidato/ultima-posizione-lavorativa/ultima-posizione-lavorativa.component';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    AnagraficaComponent,
    TitoliComponent,
    UltimaPosizioneLavorativaComponent,
    HomeRegistrazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
