import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit() {}

  iniciarSesion() {
    console.log('usuario: ' + this.formLogin.usuario);
    console.log('password: ' + this.formLogin.password);

    // Almacena el nombre de usuario en localStorage
    localStorage.setItem('username', this.formLogin.usuario);

    // Agrega un registro en la consola para verificar los valores
    console.log('Valores enviados:', this.formLogin);

    // Navega a la página de inicio (home)
    this.router.navigate(['/home']);
  }
}
