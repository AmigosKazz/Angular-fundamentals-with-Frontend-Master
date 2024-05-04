import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';
import { signal } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    @for (todos of todo; track todos.id) {
        <div>
            <label>
                <input type="checkbox" [checked]="todos.completed" (change)="updateTodo(todos)">
                {{ todos.title }}
            </label>
          <label [ngStyle]="{'text-decoration': todos.completed ? 'line-through' : 'none'}">
          </label>
        </div>

    }
  `,
  styles: `label { display: block }`,
})
export class AppComponent {
  updateTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  todo: Todo[] = [
    {
      id:1,
      title: "learn Angular",
      completed: false,
    },
    {
      id: 2,
      title: "Learn typescript",
      completed: false,
    },
    {
      id: 3,
      title: "Learn RXJS",
      completed: false,
    }
  ];

}
