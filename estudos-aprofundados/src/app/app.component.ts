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
    <!-- <app-input [contador]="addValue"></app-input>
    <br />
    <button (click)="add()">Add</button> -->
    <ng-template [ngIf]="getDados" ]>
      <h1>Nome - {{ getDados.nome }}</h1>
      <h2>Idade - {{ getDados.idade }}</h2>
    </ng-template>

    <app-output (enviarDados)="setDados($event)"></app-output>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  public destruir: boolean = true;

  public addValue: number = 0;

  public getDados: { nome: string; idade: number } | undefined;

  constructor() {}
  ngOnInit(): void {}

  public add() {
    this.addValue += 1;
  }
  public destruirComponent() {
    this.destruir = false;
  }

  public setDados(event: { nome: string; idade: number }) {
    this.getDados = event;
  }
}
