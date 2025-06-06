import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { PrincipalComponent } from '../components/principal/principal.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent
  },  
  {
    path: 'home', component: PrincipalComponent
  },
  {
    path: 'login', component: LoginComponent
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
  ],
  
})
export class AppRoutingModule { }
