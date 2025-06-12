import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';
import { ListadoPeliculasSeriesComponent } from './components/listado-peliculas-series/listado-peliculas-series.component';

export const routes: Routes = [
    {
        path: '', component: PrincipalComponent , title: 'Home page' 
    },
    {
        path: 'login', component: LoginComponent , title: 'Login page' 
    },
    {
        path: 'crearCuenta', component: CrearCuentaComponent , title: 'Registro page'
    },
    {
        path: 'listadoPeliculasSeries', component: ListadoPeliculasSeriesComponent , title: 'Listado de Peliculas y Series'
    }
    // {
    //     path: 'series', component:  , title: 'Series page'
    // },
    // {
    //     path: 'peliculas', component:  , title: 'Series page'
    // }
    
];
