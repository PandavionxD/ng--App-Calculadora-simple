import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output () sumatoria= new EventEmitter<number>()

  // num1:number
  // num2:number
  
  sumar(num1:HTMLInputElement,num2:HTMLInputElement){
    let a= Number(num1.value)
    let b=Number(num2.value)
    let res = a+b
    this.sumatoria.emit(res)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
