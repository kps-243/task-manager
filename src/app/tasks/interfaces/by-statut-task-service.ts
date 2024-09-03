import { Task, TaskStatus } from '../model/task'; // Chemin à vérifier

export interface ByStatutTaskService {
  getTasksByStatus(status: TaskStatus): Task[];
}
