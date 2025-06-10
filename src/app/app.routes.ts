import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { CrearCuentaComponent } from './components/crear-cuenta/crear-cuenta.component';

export const routes: Routes = [
    {
        path: '', component: PrincipalComponent , title: 'Home page' 
    },
    {
        path: 'login', component: LoginComponent , title: 'Login page' 
    },
    {
        path: 'crearCuenta', component: CrearCuentaComponent , title: 'Registro page'
    }
    
];
