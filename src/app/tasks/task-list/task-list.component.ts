import { Component, Input } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() currentTaskListComponent: Task[] = []; // Assurez-vous que ce soit correctement déclaré
}
