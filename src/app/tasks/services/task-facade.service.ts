import { Injectable } from '@angular/core';
import { CRUDTaskListServiceService } from './crudtask-list-service.service'; // Chemin à vérifier
import { ByStatutTaskListService } from './by-statut-task-list-service.service'; // Chemin à vérifier
import { Task, TaskStatus } from '../model/task'; // Chemin à vérifier

@Injectable({
  providedIn: 'root'
})
export class TaskFacade {
  constructor(
    private crudService: CRUDTaskListServiceService,
    private byStatutService: ByStatutTaskListService
  ) {}

  // Méthodes CRUD
  getTasks(): Task[] {
    return this.crudService.getTasks();
  }

  storeTask(task: Task): void {
    this.crudService.storeTask(task);
  }

  delTask(taskTitle: string): void {
    this.crudService.delTask(taskTitle);
  }

  editTask(updatedTask: Task): void {
    this.crudService.editTask(updatedTask);
  }

  // Méthode pour récupérer les tâches par statut
  getTasksByStatus(status: TaskStatus): Task[] {
    return this.byStatutService.getTasksByStatus(status);
  }
}
