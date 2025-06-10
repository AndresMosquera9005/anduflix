import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '', component: PrincipalComponent , title: 'Home page' 
    },
    // {
    //     path: 'home', component: PrincipalComponent , title: 'Trailer Peliculas' 
    // },
    {
        path: 'login', component: LoginComponent , title: 'Login page' 
    },
    
];
