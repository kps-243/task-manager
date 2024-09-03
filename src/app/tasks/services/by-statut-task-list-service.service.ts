import { Injectable } from '@angular/core';
import { CRUDTaskListServiceService } from './crudtask-list-service.service'; // Chemin à vérifier
import { Task, TaskStatus } from '../model/task'; 
import { ByStatutTaskService } from '../interfaces/by-statut-task-service';

@Injectable({
  providedIn: 'root'
})
export class ByStatutTaskListService implements ByStatutTaskService {
  constructor(private crudService: CRUDTaskListServiceService) {}

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.crudService.getAllTasks().filter(task => task.state === status);
  }
}
