import { Injectable } from '@angular/core';
import { Task, TaskStatus } from '../model/task'; // Chemin à vérifier
import { CRUDTaskService } from '../interfaces/crudtask-service'; // Chemin à vérifier
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDTaskListServiceService implements CRUDTaskService {
  currentList: Task[];

  constructor() {
    this.currentList = [
      { title: 'Tâche entamée 1', description: 'Cette tâche est entamée !', state: TaskStatus.EN_COURS, creationDate: new Date(2024, 4, 8) },
      { title: 'Tâche achevée 1', description: 'Cette tâche est finie !', state: TaskStatus.TERMINE, creationDate: new Date(2024, 4, 10) },
      { title: 'Tâche entamée 2', description: 'Cette tâche est aussi entamée !', state: TaskStatus.EN_COURS, creationDate: new Date(2024, 4, 4) },
      { title: 'Tâche non commencée 1', description: 'Cette tâche est en attente !', state: TaskStatus.A_FAIRE, creationDate: new Date(2024, 4, 8) },
      { title: 'Tâche achevée 2', description: 'Cette tâche est aussi finie !', state: TaskStatus.TERMINE, creationDate: new Date(2024, 4, 7) },
      { title: 'Tâche entamée 3', description: 'Cette tâche est également entamée !', state: TaskStatus.EN_COURS, creationDate: new Date(2024, 4, 9) },
    ];
  }
  getAllTasks(): Task[] {
    return this.currentList;
  } 

  getTasks(): Observable<Task[]> {
    return of(this.currentList);
  }

  storeTask(task: Task): void {
    this.currentList.push(task);
  }

  delTask(taskTitle: string): void {
    this.currentList = this.currentList.filter(t => t.title !== taskTitle);
  }

  editTask(updatedTask: Task): void {
    const taskIndex = this.currentList.findIndex(t => t.title === updatedTask.title);
    if (taskIndex > -1) {
      this.currentList[taskIndex] = updatedTask;
    }
  }
}
