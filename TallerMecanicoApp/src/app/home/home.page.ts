import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  mensaje: string = "";
  userName: string = "";

  constructor(
    private rutaActiva: ActivatedRoute,
    private firestore: AngularFirestore,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.rutaActiva.queryParams.subscribe((params) => {
      if (params['usuario']) {
        this.mensaje = `BIENVENIDO ${params['usuario'].toUpperCase()}`;
        document.cookie = `usuario=${params['usuario']}; SameSite=None; Secure`;
        this.getUserName(params['usuario']);
      }
    });
  }

  getUserName(usuarioId: string) {
    this.firestore
      .collection('Cliente')
      .doc(usuarioId)
      .valueChanges()
      .subscribe((userData: any) => {
        if (userData && userData.Nombre) {
          this.userName = userData.Nombre;
        } else {
          console.log('El documento no existe o no contiene el campo "Nombre".');
        }
        console.log('Nombre del usuario:', this.userName);
      });
  }

  doSomething() {
    console.log('Opción 1 seleccionada');
  }

  doSomethingElse() {
    console.log('Opción 2 seleccionada');
  }

  logout() {
    this.authService.logout()
      .then(() => {
        console.log('Cierre de sesión exitoso');
        // Redirige al usuario a la página de inicio de sesión (login)
        this.router.navigate(['/login']); 
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
        // Maneja el error aquí
      });
  }
}
