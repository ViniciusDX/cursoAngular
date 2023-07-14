import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public nome: string = 'Vinicius Diniz Pinto';

  public idade: number = 24;

  public tempo: string = 'nevando';

  public dia: number = 17;

  public date: Date = new Date();
}
