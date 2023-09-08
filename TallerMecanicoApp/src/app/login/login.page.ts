import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formLogin = {
    usuario: "",
    password: ""
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion() {
    console.log("usuario: " + this.formLogin.usuario);
    console.log("password: " + this.formLogin.password);

    // Crear el objeto NavigationExtras con los datos a enviar
    let datosEnviar: NavigationExtras = {
      queryParams: { 
        usuario: this.formLogin.usuario, // Establecer usuario
      }
    };

    // Utilizar navigate con los datos a enviar
    this.router.navigate(['home'], datosEnviar);
  }
}
