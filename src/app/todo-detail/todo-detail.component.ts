// import { Component } from '@angular/core';

// @Component({
//   selector: 'todo-detail-root',
//   templateUrl: './todo-detail.component.html',
//   styleUrl: './todo-detail.component.scss',
// })
// export class TodoDetailComponent {
//   title = 'Todo Detail';
// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'todo-detail-root',
//   templateUrl: './todo-detail.component.html',
//   styleUrl: './todo-detail.component.scss',
// })
// export class TodoDetailComponent {
//   title = 'Todo Detail';
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'todo-detail-root',
  standalone: true,    
  imports: [
    CommonModule,       
    HttpClientModule,   
    RouterModule        
  ],
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  todo: any;
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`${this.apiUrl}/${id}`).subscribe((data) => {
      this.todo = data;
      console.log(this.todo);
    });
  }
}

