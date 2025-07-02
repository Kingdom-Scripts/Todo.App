import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AllTodoComponent } from './app/all-todo.component';

bootstrapApplication(AllTodoComponent, appConfig).catch((err) =>
  console.error(err)
);
