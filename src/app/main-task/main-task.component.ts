import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from "../task-list/task-list.component";
import {Task, TaskStatus} from "../model/task";

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css'],
  standalone: true,
  imports: [TaskListComponent]
})

export class MainTaskComponent implements OnInit {
  currentList !: Task[]

  ngOnInit(): void {
    this.currentList = [
      { title: 'Tâche entamée 1', description: 'Cette tâche est entamée !', state: TaskStatus.EN_COURS },
      { title: 'Tâche achevée 1', description: 'Cette tâche est finie !', state: TaskStatus.TERMINE },
      { title: 'Tâche entamée 2', description: 'Cette tâche est aussi entamée !', state: TaskStatus.EN_COURS },
      { title: 'Tâche non commencée 1', description: 'Cette tâche est en attente !', state: TaskStatus.A_FAIRE },
      { title: 'Tâche achevée 2', description: 'Cette tâche est aussi finie !', state: TaskStatus.TERMINE },
      { title: 'Tâche entamée 3', description: 'Cette tâche est également entamée !', state: TaskStatus.EN_COURS },
    ]
  }
}