import { Component } from '@angular/core';
import { HeaderPrincipalComponent } from "../header-principal/header-principal.component";
import { CardComponent } from "../card/card.component";
import { TrailerPeliculasComponent } from "../trailer-peliculas/trailer-peliculas.component";
import { TrailerSeriesComponent } from "../trailer-series/trailer-series.component";

@Component({
  selector: 'app-principal',
  imports: [HeaderPrincipalComponent, CardComponent, TrailerPeliculasComponent, TrailerSeriesComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
}
