import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Vinicius Diniz', idade: 24 },
    { nome: 'mayanne ', idade: 25 },
    { nome: 'tico ', idade: 34 },
    { nome: 'teco', idade: 29 },
    { nome: 'bilimbibi', idade: 94 },
  ];
  ngOnInit(): void {}

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
