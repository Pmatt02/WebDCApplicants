import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnagraficaComponent } from './RegistrazioneCandidato/anagrafica/anagrafica.component';
import { HomeRegistrazioneComponent } from './RegistrazioneCandidato/home-registrazione/home-registrazione.component';
import { TitoliComponent } from './RegistrazioneCandidato/titoli/titoli.component';
import { UltimaPosizioneLavorativaComponent } from './RegistrazioneCandidato/ultima-posizione-lavorativa/ultima-posizione-lavorativa.component';


const routes: Routes = [

  {path: '', component: HomeRegistrazioneComponent},
  {path: 'home/anagrafica', component: AnagraficaComponent},
  {path: 'home/titoli', component: TitoliComponent},
  {path: 'home/ultima_posizione_lavorativa', component: UltimaPosizioneLavorativaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
