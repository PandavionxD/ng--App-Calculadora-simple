import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo= 'Mi primera aplicacion de calculadora'
  res:number

  sumar(resultado:number){
    this.res= resultado
  }
}
