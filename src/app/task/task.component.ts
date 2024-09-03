import {Component, OnInit, Input} from '@angular/core';     // On ajoute l'import de 'Input'
import { Task, TaskStatus } from '../model/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() currentTaskComponent!: Task;                     // '@Input' indique qu'il accepte des données en entrée
}