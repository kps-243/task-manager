import { Component } from '@angular/core';
import {TaskComponent} from "./task/task.component";
import { RouterOutlet } from '@angular/router';
import { MainTaskComponent } from './main-task/main-task.component';
imports: [RouterOutlet, TaskComponent]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-manager';
}
