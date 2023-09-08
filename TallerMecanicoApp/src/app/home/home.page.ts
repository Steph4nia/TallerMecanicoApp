import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  mensaje: string = "";

  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    // Obtén el nombre de usuario del query parameter 'usuario'
    this.rutaActiva.queryParams.subscribe(params => {
      if (params['usuario']) {
        // Establece el mensaje de bienvenida con el nombre de usuario en mayúsculas
        this.mensaje = `BIENVENIDO ${params['usuario'].toUpperCase()}`;

        // Configura la cookie con el atributo SameSite
        document.cookie = `usuario=${params['usuario']}; SameSite=None; Secure`; // Ejemplo con SameSite=None y Secure (para HTTPS)
      }
    });
  }

  // Funciones para las acciones del menú
  doSomething() {
    // Lógica para la opción 1
    console.log('Opción 1 seleccionada');
  }

  doSomethingElse() {
    // Lógica para la opción 2
    console.log('Opción 2 seleccionada');
  }

  logout() {
    // Lógica para cerrar sesión
    console.log('Cerrar sesión');
  }
}