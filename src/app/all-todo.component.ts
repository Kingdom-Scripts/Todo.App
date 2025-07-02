import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'all-todo-root',
  imports: [RouterOutlet],
  templateUrl: './all-todo.component.html',
  styleUrl: './all-todo.component.scss',
})
export class AllTodoComponent {
  title = 'todo.all-todo';
}
