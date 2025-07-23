import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from '../components/login/login.component';
import { CrearCuentaComponent } from '../components/crear-cuenta/crear-cuenta.component';
import { ListadoPeliculasSeriesComponent } from '../components/listado-peliculas-series/listado-peliculas-series.component';
import { TrailerPeliculasComponent } from '../components/trailer-peliculas/trailer-peliculas.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },  
  {
    path: 'Home', component: ListadoPeliculasSeriesComponent
  },
  {
    path: 'crearCuenta', component: CrearCuentaComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'listadoPeliculasSeries', component: ListadoPeliculasSeriesComponent 
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ],
  
})
export class AppRoutingModule { }
