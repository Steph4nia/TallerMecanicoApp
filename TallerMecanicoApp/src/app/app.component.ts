import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle'
register();
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(public router: Router) {
    this.initializeApp();
  }
  initializeApp(){
    this.router.navigateByUrl('animacion')
  };
}

