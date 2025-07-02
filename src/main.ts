import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AllTodoComponent } from './app/all-todos/all-todo.component';

bootstrapApplication(AllTodoComponent, appConfig).catch((err) =>
  console.error(err)
);
