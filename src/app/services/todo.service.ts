import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Todo } from "../models/Todo";

const httpOptions = {
  headers: new HttpHeaders({
    "Cotent-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class TodoService {
  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  todolimit: string = "?_limit=5";
  constructor(private http: HttpClient) {}
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl + this.todolimit);
  }
  toggleCompleted(todo: Todo): Observable<any> {
    const url = this.todosUrl + "/" + todo.id;
    return this.http.put(url, todo, httpOptions);
  }
}
