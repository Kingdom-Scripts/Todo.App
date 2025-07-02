import { Routes } from '@angular/router';
import { AllTodoComponent } from './all-todos/all-todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: AllTodoComponent,
  },
  {
    path: 'create',
    component: CreateTodoComponent,
  },
  {
    path: 'update/:id',
    component: UpdateTodoComponent,
  },
  {
    path: 'detail/:id',
    component: TodoDetailComponent,
  },
];
