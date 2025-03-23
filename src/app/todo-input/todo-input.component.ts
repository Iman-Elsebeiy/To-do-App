import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  @Output() newTodo = new EventEmitter<string>();
  task: string = '';

  addTask() {
    if (this.task.trim()) {
      this.newTodo.emit(this.task);
      this.task = '';
    }
  }
}
