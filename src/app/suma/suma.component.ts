import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent  {
  title = 'Mi Calculadora App'
  // num1=0
  // num2=0
  // res=0
  // sumar():void{
  //   this.res = this.num1+this.num2
  // }
  num1=0
  num2=0
  res=0

  
  sumar():void{
    this.res = this.num1+this.num2
  }

}
