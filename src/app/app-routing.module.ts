import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FavoritosComponent} from "./componentes/favoritos/favoritos.component";
import {InicioComponent} from "./componentes/inicio/inicio.component";
import {ModalsComponent} from "./componentes/modals/modals.component";

const routes: Routes = [
  {path : 'favoritos', component : FavoritosComponent},
  {path : 'inicio', component: InicioComponent},
  {path : 'modal', component: ModalsComponent},
  {path : '', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
