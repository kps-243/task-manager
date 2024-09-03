import { Component } from '@angular/core';
import {TaskComponent} from "./tasks/task/task.component";
import { RouterOutlet } from '@angular/router';
import { MainTaskComponent } from './tasks/main-task/main-task.component';
import { TasksModule } from './tasks/tasks.module';
imports: [RouterOutlet, TaskComponent]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasksModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
}
