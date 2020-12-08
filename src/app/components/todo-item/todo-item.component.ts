import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Todo } from "src/app/models/Todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() hhh: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private tosoService: TodoService) {}

  ngOnInit() {}

  setClasses() {
    let clas = {
      hhh: true,
      "is-complete": this.hhh.completed
    };
    return clas;
  }
  onToggle(hhh) {
    hhh.completed = !hhh.completed;
    this.tosoService.toggleCompleted(hhh).subscribe(hhh => console.log(hhh));
  }

  onDelete(hhh) {
    this.deleteTodo.emit(hhh);
  }
}
