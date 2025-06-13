import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  verificarDatos() {
    var correoElectronico = document.getElementById("email") as HTMLInputElement;
    var clave = document.getElementById("password") as HTMLInputElement;
    this.email = correoElectronico.value;
    this.password = clave.value;
    
    const correo = "andru@gmail.com";
    const contrasena = "90051731725895477*";

    if (this.email == "" && this.password == "") {
      alert("Ingrese su correo y contraseña");
    } else if (this.email === correo && this.password === contrasena) {
      this.router.navigate(['listadoPeliculasSeries']);
    } else {
      alert("Datos incorrectos, intente nuevamente");
    }
  }
}
