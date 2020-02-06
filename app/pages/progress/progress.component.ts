import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 30;
  /*para que permita el number en el archivo tslint.json modificar el true de no-inferrable-types a false*/
  constructor() { }

  ngOnInit() {
  }


}
