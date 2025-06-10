import { Component } from '@angular/core';
import { PrincipalComponent } from "./components/principal/principal.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderPrincipalComponent } from "./components/header-principal/header-principal.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrincipalComponent, RouterModule, HeaderPrincipalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'andruflix';
}
