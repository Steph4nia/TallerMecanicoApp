import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mensaje: string = "";
  constructor(private rutaActiva : ActivatedRoute) {

    this.rutaActiva.queryParams.subscribe(params =>{

      if(params['usuario'])
      {
        this.mensaje = params['usuario'];
      }

      })

  }

}
