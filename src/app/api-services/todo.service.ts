// src/app/api-services/todo.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://687659b4814c0dfa653bbf37.mockapi.io/api/v1/todo';

  constructor(private http: HttpClient) {}

  createTodo(todo: { title: string; dateCreated: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, todo);
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
