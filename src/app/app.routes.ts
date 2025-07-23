import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { ListadoPeliculasSeriesComponent } from './components/listado-peliculas-series/listado-peliculas-series.component';
import { TrailerPeliculasComponent } from './components/trailer-peliculas/trailer-peliculas.component';

export const routes: Routes = [
    {
        path: '', component: ListadoPeliculasSeriesComponent , title: 'Home page' 
    },
    {
        path: 'login', component: LoginComponent , title: 'Trailer peliculas page' 
    },
    {
        path: 'crearCuenta', component: CrearCuentaComponent , title: 'Registro page'
    },
    {
        path: 'listadoPeliculasSeries', component: ListadoPeliculasSeriesComponent , title: 'Listado de Peliculas y Series'
    }    
];
