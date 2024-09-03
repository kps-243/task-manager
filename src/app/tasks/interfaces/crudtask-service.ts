import { Task } from '../model/task'; // Chemin à vérifier

export interface CRUDTaskService {
  getTasks(): Task[];
  storeTask(task: Task): void;
  delTask(taskTitle: string): void;
  editTask(task: Task): void;
}
