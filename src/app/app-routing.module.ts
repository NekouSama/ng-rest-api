import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonComponent },
  { path: '', component: PokemonComponent },
  { path: '**', component: PokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
