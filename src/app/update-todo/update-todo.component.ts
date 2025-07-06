// import { Component } from '@angular/core';

// @Component({
//   selector: 'update-todo-root',
//   templateUrl: './update-todo.component.html',
//   styleUrl: './update-todo.component.scss',
// })
// export class UpdateTodoComponent {
//   title = 'Update Todo';
// }




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'update-todo-root',
  standalone: true,   
  imports: [
    CommonModule,          
    ReactiveFormsModule,   
    FormsModule,           
    RouterModule,          
    HttpClientModule       
  ],
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss'],
})
export class UpdateTodoComponent implements OnInit {
  todoForm!: FormGroup;
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  todoId!: string;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoId = this.route.snapshot.paramMap.get('id')!;
    this.todoForm = this.fb.group({
      title: [''],
      completed: [false],
    });

    this.http.get(`${this.apiUrl}/${this.todoId}`).subscribe((data: any) => {
      this.todoForm.patchValue({
        title: data.title,
        completed: data.completed,
      });
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.todoForm.value);
    alert('This is a fake update for now!');
    this.router.navigate(['/']);
  }
}

