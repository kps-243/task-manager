import { Injectable } from '@angular/core';
import { CRUDTaskListServiceService } from './crudtask-list-service.service'; // Chemin à vérifier
import { Task, TaskStatus } from '../model/task'; // Chemin à vérifier
import { ByStatutTaskService } from '../interfaces/by-statut-task-service'; // Chemin à vérifier

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService implements ByStatutTaskService {
  constructor(private crudService: CRUDTaskListServiceService) {}

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.crudService.getTasks().filter(task => task.state === status);
  }
}
