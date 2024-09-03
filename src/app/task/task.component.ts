import {Component, OnInit,} from '@angular/core';     // importe la méthode "OnInit" de Angular
import { Task, TaskStatus } from '../model/task';

@Component({
  selector: 'app-task',                              // indique la syntaxe permettant d'utiliser ce composant dans le template principal
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',               // précise le template du composant
  styleUrl: './task.component.css'                    // précise la feuille de style du composant
})

export class TaskComponent implements OnInit {
  task!: Task;                                        // implémente une classe "Task" vide au chargement de la page (défini par 'OnInit')

  ngOnInit(): void {                                  // Définit ce qui va ce passer au chargement de la page
    this.task = {                                     // On remplit les données de notre classe "Task"
      title: 'Découvrir Angular',
      description: 'Manipuler un petit peu pour découvrir l\'univers d`\'Angular',
      state: TaskStatus.EN_COURS
    };
  }
}