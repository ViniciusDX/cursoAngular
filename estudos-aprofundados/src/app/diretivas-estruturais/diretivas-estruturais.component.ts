import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Marcos', idade: 23 },
    { nome: 'Davi', idade: 25 },
    { nome: 'Eron', idade: 26 },
    { nome: 'Maria', idade: 20 },
  ];
  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({ nome: 'Vinícius', idade: 24 });
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1);
  }
}
