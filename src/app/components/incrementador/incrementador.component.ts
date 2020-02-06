import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false} ) txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log( 'Leyenda', this.leyenda);
    console.log( 'Progreso', this.progreso);
  }

  ngOnInit() {
  }

  onChanges(newvalue: number) {

    // let elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log(this.txtProgress);


    if (newvalue >= 100) {
      this.progreso = 100;
    } else if ( newvalue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newvalue;
    }

   // elemHTML.value = this.progreso;


    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

  }

  cambiarValor( valor: number ) {

    if (this.progreso > 99 && valor > 0 ) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }


    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);
  }

}
