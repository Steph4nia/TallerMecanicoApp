import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; // Importa FormControl de @angular/forms
import { ErrorStateMatcher } from '@angular/material/core'; // Importa ErrorStateMatcher de Angular Material

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  emailFormControl = new FormControl(); // FormControl para el correo electrónico
  passwordFormControl = new FormControl(); // FormControl para la contraseña
  value = "hola";
  matcher = new ErrorStateMatcher();

  constructor() { }

  ngOnInit() {
  }
}
