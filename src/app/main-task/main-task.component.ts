import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../model/task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-main-task',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './main-task.component.html',
  styleUrl: './main-task.component.css'
})

export class MainTaskComponent implements OnInit {
  currentTask !: Task
  ngOnInit(): void {                           // C'est ici qu'on définit les données à présent
    this.currentTask = {
      title: 'Découvrir Angular',
      description: 'Manipuler un petit peu pour découvrir l\'univers d`\'Angular',
      state: TaskStatus.EN_COURS
    };
  }
}