import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoService } from '../api-services/todo.service';

@Component({
  selector: 'all-todo-root',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './all-todo.component.html',
  styleUrl: './all-todo.component.scss',
})
export class AllTodoComponent implements OnInit {
  title = 'All Todos';
  todos: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe((data: any) => {
      this.todos = data;
    });
  }
}
