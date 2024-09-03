import { Component, OnInit } from '@angular/core';
import { CRUDTaskListServiceService } from '../services/crudtask-list-service.service'; // Chemin à vérifier
import { ByStatutTaskListService } from '../services/by-statut-task-list-service.service'; // Chemin à vérifier
import { Task, TaskStatus } from '../model/task'; // Chemin à vérifier

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css'],
})
export class MainTaskComponent implements OnInit {
  archivedTasks: Task[] = []; // Propriété pour stocker les tâches terminées
  CRUDTaskListServiceService!: CRUDTaskListServiceService; // Propriété pour stocker le service CRUDTaskListServiceService
  byStatutTaskListService!: ByStatutTaskListService; // Propriété pour stocker le service ByStatutTaskListService

  ngOnInit(): void {
    this.CRUDTaskListServiceService = new CRUDTaskListServiceService();
    this.byStatutTaskListService = new ByStatutTaskListService(this.CRUDTaskListServiceService);
    this.archivedTasks = this.byStatutTaskListService.getTasksByStatus(TaskStatus.TERMINE);
  }
}
