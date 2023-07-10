import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss'],
})
export class DataBidingComponent implements OnInit {
  public nome: string = 'Vinícius';
  public idade: number = 29;
  public idade2: number = 9;

  public checkedDisabled: boolean = true;
  public srcImag: string =
    'https://i.pinimg.com/736x/e0/43/b8/e043b8bd8ec385dbd09271d19417d5f7.jpg';

  public position: { x: number; y: number } = { x: 0, y: 0 };
  constructor() {}

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
