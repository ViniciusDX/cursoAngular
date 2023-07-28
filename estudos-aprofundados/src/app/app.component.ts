import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-data-biding></app-data-biding> -->
    <!-- <app-diretivas-estruturais></app-diretivas-estruturais> -->
    <!-- <app-diretivas-atributos>
      <h1>Inicio da aula</h1>
      <h2>Termino da aula</h2>
    </app-diretivas-atributos>
    <app-new-component></app-new-component> -->
    <app-input [contador]="addValue"></app-input>
    <br />
    <button (click)="add()">Add</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}
  public addValue: number = 0;
  public add() {
    this.addValue += 1;
  }
  ngOnInit(): void {}
}
