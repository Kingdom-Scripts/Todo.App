import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'create-todo-root',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
})
export class CreateTodoComponent {
  title = 'Create Todo';
}
