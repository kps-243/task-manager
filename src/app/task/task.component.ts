import {Component, OnInit, Input} from '@angular/core';
import { Task, TaskStatus } from '../model/task';
import { ColorTaskDirective } from './color-task.directive';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ColorTaskDirective],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() currentTaskComponent!: Task;
}