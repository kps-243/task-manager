import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../model/task'; // Chemin à vérifier
import { TaskFacade } from '../services/task-facade.service'; // Chemin à vérifier

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css'],
})
export class MainTaskComponent implements OnInit {
  archivedTasks: Task[] = []; // Propriété pour stocker les tâches terminées

  constructor(private TaskFacade: TaskFacade) {}

  ngOnInit(): void {
    this.archivedTasks = this.TaskFacade.getTasksByStatus(TaskStatus.A_FAIRE);
  }
}
