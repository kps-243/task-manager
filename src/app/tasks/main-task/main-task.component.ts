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
  tasks : Task[] = [];
  constructor(private TaskFacade: TaskFacade) {}

  ngOnInit(): void {
    this.TaskFacade.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
    this.archivedTasks = this.TaskFacade.getTasksByStatus(TaskStatus.A_FAIRE);
  }
}
