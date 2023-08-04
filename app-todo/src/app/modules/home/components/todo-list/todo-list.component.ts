import { Component } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public taskList: Array<TaskList> = [
    { task: 'Minha nova task', checked: true },
    { task: 'Minha nova task2', checked: false },
  ];

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    this.taskList.slice(event, 1);
  }
  public deleteAllTask() {
    const confirm = window.confirm('Você deseja realmente Deletar tudo?');
    if (confirm) {
      this.taskList = [];
    }
  }
}
