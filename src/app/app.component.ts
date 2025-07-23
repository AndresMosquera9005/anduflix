import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'andruflix';

  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  verificarDatos() {
    var correoElectronico = document.getElementById("email") as HTMLInputElement;
    var clave = document.getElementById("password") as HTMLInputElement;
    this.email = correoElectronico.value;
    this.password = clave.value;
    
    const correo = "andru@gmail.com";
    const contrasena = "90051763881/";

    if (this.email === "" && this.password === "") {
      alert("Ingrese su correo y contraseña");
    } else if (this.email === correo && this.password === contrasena) {
      this.router.navigate(['listadoPeliculasSeries']);
    } else {
      alert("Datos incorrectos, intente nuevamente");
    }
  }
}
