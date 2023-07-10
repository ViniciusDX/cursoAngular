import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = 'Bem Vindo!';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    alert('Foi alterado com sucesso.');
  }
  ngOnDestroy(): void {
    alert('O componente foi destruido com sucesso');
  }
}
