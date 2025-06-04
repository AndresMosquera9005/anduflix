import { Component } from '@angular/core';
import { HeaderPrincipalComponent } from "../header-principal/header-principal.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-principal',
  imports: [HeaderPrincipalComponent, CardComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
}
