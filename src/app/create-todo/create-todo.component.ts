import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { TodoService } from '../api-services/todo.service';

@Component({
  selector: 'create-todo-root',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss',
  imports: [ReactiveFormsModule],
   standalone: true,
})
export class CreateTodoComponent implements OnInit {
  title = 'Create Todo';
  todoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

 createTodo() {
  if (this.todoForm.valid) {
    const newTodo = {
      title: this.todoForm.value.title,
      dateCreated: new Date().toISOString(),
    };

    this.todoService.createTodo(newTodo).subscribe(() => {
      alert('✅ Todo created successfully!');
      this.router.navigate(['/']);
    });
  }
}

}
