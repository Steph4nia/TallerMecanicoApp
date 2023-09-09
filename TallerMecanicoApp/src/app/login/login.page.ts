import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  emailFormControl = new FormControl();
  passwordFormControl = new FormControl();
  matcher = new ErrorStateMatcher();

  formLogin = {
    usuario: '',
    password: '',
  };

  constructor(private router: Router) {
    
  }

  ngOnInit() {}

  /**
   * Esta función se llama al iniciar sesión.
   * Registra los valores del usuario y navega a la página de inicio (home).
   */
  iniciarSesion() {
    console.log('usuario: ' + this.formLogin.usuario);
    console.log('password: ' + this.formLogin.password);

    // Crear el objeto NavigationExtras con los datos a enviar
    let datosEnviar: NavigationExtras = {
      queryParams: { 
        usuario: this.formLogin.usuario, // Establecer usuario
      }
    };

    // Agrega un registro en la consola para verificar los valores
    console.log('Valores enviados:', this.formLogin);

    // Navega a la página de inicio (home) con los datos adicionales
    this.router.navigate(['/home'], datosEnviar);
  }
}
