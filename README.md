# Commandes effectuées

## Mise en place du projet
```node -v```  --> affiche "v.20.10.0" 

```npm -v```  --> affiche "v.10.8.3"

```npm install -g @angular/cli```  --> installe le client Angular sur la machine

```ng v``` --> affiche "v.17.3.9"

```ng new task-manager``` --> Initialise un nouveau projet Angular appelé "Task Manager"

```ng serve``` --> Démarre le serveur local du projet, accessible à l'url suivante : http://localhost:4200/

```npm install --global yarn``` --> Ajoute le gestionnaire de package Yarn (équivalent à NPM) au projet

```yarn add --dev @compodoc/compodoc``` --> Ajoute Compodoc, un outil qui permet de générer une documentation statique de l'application, 
en obtenant notamment une visualisation des différents composants et leurs dépendances

## Création d'un composant
```ng generate class model/Task``` --> Créé une classe "Task" dans le dossier "src/app/model"
- Ajouter dans le fichier "task.ts" le contenu suivant :
```
export class Task {
  title!: string;                  // "!" indique que la variable peut être vide à l'instanciation
  description!: string;
  state!: TaskStatus;
}

export enum TaskStatus {
  A_FAIRE = 'A faire',
  EN_COURS = 'En cours',
  TERMINE = 'Terminé'
}
```

- Se placer dans le répertoire "src/app", puis exécuter ```ng g component task``` , qui va générer un dossier 
"task" comportant un fichier HTML, un fichier CSS et les fichiers TS propres au fonctionnement de ce composant.

- Dans le fichier "src/app/task/task.component.ts", ajouter le code suivant :
```
import {Component, OnInit,} from '@angular/core';     // importe la méthode "OnInit" de Angular
import { Task, taskStatus } from '../model/task';

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
      state: taskStatus.EN_COURS
    };
  }
}
```

- Dans le fichier "src/app/task/task.component.html", définir l'affichage de ce composant :
```
<h1>Bienvuene sur ma première page Angular ! </h1>

<h2>Le titre : {{ task.title }}</h2>
<p>La description : {{ task.description }}</p>
<p>L'état : {{ task.state }}</p>
```

- Dans le fichier "src/app/app.component.html", appeler ce composant de la manière suivante :
```
<app-task></app-task>
```
 
- Vérifier dans "src/app/app.components.ts" que le composant est bien importé dans le template principal :
```
import {TaskComponent} from "./task/task.component";

imports: [RouterOutlet, TaskComponent],
```

- Visualiser à l'url http://localhost:4200/ le résultat 

## Organiser les composants

```ng g component main-task ``` --> créé un nouveau composant "main-task" qui est la partie 'intelligente' 
du composant puisque c'est elle qui va affecter des données aux parties 'idiotes' du composant.

- Modifier le contenu de "src/app/task/task.component.ts" pour qu'il contienne le code suivant :
```
import {Component, OnInit, Input} from '@angular/core';     // On ajoute l'import de 'Input'
import { Task, taskStatus } from '../model/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() currentTaskComponent!: Task;                     // '@Input' indique qu'il accepte des données en entrée
}
```

- Modifier aussi en conséquence le fichier "src/app/task/task.component.html" :
```
<h1>Bienvenue sur ma première page Angular ! </h1>

<h2>Le titre : {{ currentTaskComponent.title }}</h2>
<p>La description : {{ currentTaskComponent.description }}</p>
<p>L'état : {{ currentTaskComponent.state }}</p>
```

- Nous allons ensuite configurer le composant "Main-task" pour qu'il transmette les données au composant enfant "Task":
```
import { Component, OnInit } from '@angular/core';
import { Task, taskStatus} from '../model/task';           // Récupération de la classe "Task"
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css'],
  standalone: true,
  imports: [TaskComponent]                         // importation du composant enfant
})

export class MainTaskComponent implements OnInit {
  currentTask !: Task
  ngOnInit(): void {                           // C'est ici qu'on définit les données à présent
    this.currentTask = {
      title: 'Découvrir Angular',
      description: 'Manipuler un petit peu pour découvrir l\'univers d`\'Angular',
      state: taskStatus.EN_COURS
    };
  }
}
```

- Dans "src/app/main-task/main-task.component.html", mettre le code suivant :
```
<app-task [currentTaskComponent]="currentTask"></app-task>
```

- Modifier "src/app/app.component.html" pour qu'il appelle à présent le componant 'intelligent':
```
<app-main-task></app-main-task>
```

## Mettre en place des directives

- Créer un nouveau composant "TaskList" avec ```ng generate component task-list```

- Modifier "src/app/main-task/main-task.component.ts" :
```
import { Component, OnInit } from '@angular/core';
import { TaskListComponent } from "../task-list/task-list.component";
import {Task, TaskStatus} from "../model/task";
import {TaskList} from "../model/task-list";

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css'],
  standalone: true,
  imports: [TaskListComponent]
})

export class MainTaskComponent implements OnInit {
  currentList !: Task[]
  classTaskList !: TaskList

  ngOnInit(): void {
    this.currentList = [
      { title: 'Tâche entamée 1', description: 'Cette tâche est entamée !', state: taskStatus.EN_COURS },
      { title: 'Tâche achevée 1', description: 'Cette tâche est finie !', state: taskStatus.TERMINE },
      { title: 'Tâche entamée 2', description: 'Cette tâche est aussi entamée !', state: taskStatus.EN_COURS },
      { title: 'Tâche non commencée 1', description: 'Cette tâche est en attente !', state: taskStatus.A_FAIRE },
      { title: 'Tâche achevée 2', description: 'Cette tâche est aussi finie !', state: taskStatus.TERMINE },
      { title: 'Tâche entamée 3', description: 'Cette tâche est également entamée !', state: taskStatus.EN_COURS },
    ]
  }
}
```

- Modifier "src/app/main-task/main-task.component.html" :
```
<app-task-list [currentTaskListComponent]="currentList"></app-task-list>
```

- Dans "src/app/task-list/task-list.component.ts" fraîchement créé, ecrire :
```
import {Component, Input, OnInit} from '@angular/core';
import { TaskList } from '../model/task-list';
import { Task } from '../model/task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {
  @Input() currentTaskListComponent!: Task[];
}
```

- Dans "src/app/task-list/task-list.component.html", ecrire :
```
<h1>Ma liste de tâches </h1>

@for (task of currentTaskListComponent; track $index) {
  <app-task [currentTaskComponent]="task"></app-task>
}
```

- Modifier "src/app/task/task.component.ts" :
```
import {Component, OnInit, Input} from '@angular/core';
import { Task, taskStatus } from '../model/task';
import { ColorTaskDirective } from './color-task.directive';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ColorTaskDirective],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() currentTaskComponent!: Task;
}
```

- Modifier "src/app/task/task.component.html" :
```
<div [colorTask]="currentTaskComponent.state" class="task-item">
  <h2>{{ currentTaskComponent.title }}</h2>
  <p>{{ currentTaskComponent.description }}</p>
  <p>{{ currentTaskComponent.state }}</p>
</div>
```

- Pour génèrer une directive pour gérer la couleur des tâches lors de l'affichage, exécuter ```ng generate directive colorTask```. 
Dans le fichier "src/app/task/color-task.directive.ts" généré, écrire :
```
import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { taskStatus } from '../model/task';

@Directive({
  selector: '[colorTask]',
  standalone: true
})

export class ColorTaskDirective implements OnChanges {
  @Input() colorTask!: taskStatus;

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    this.applyColor();
  }

  private applyColor(): void {
    let color: string;

    switch (this.colorTask) {
      case taskStatus.A_FAIRE:
        color = 'red';
        break;
      case taskStatus.EN_COURS:
        color = 'blue';
        break;
      case taskStatus.TERMINE:
        color = 'green';
        break;
      default:
        color = 'white';
    }

    this.el.nativeElement.style.color = color;
  }
}
```

## Mettre en place un pipe

- Dans "src/app/model/task.ts", ajouter une propriété date : 
```
export class Task {
  title!: string;           // "!" indique que la variable peut être vide à l'instanciation
  description!: string;
  state!: taskStatus;
  creationDate!: Date;
}
```

- Dans "src/app/main-task/main-task.component.ts", modifier pour définir des dates aux tâches :
```
ngOnInit(): void {
    this.currentList = [
      { title: 'Tâche entamée 1', description: 'Cette tâche est entamée !', state: taskStatus.EN_COURS, creationDate: new Date(2024, 4, 8) },
      { title: 'Tâche achevée 1', description: 'Cette tâche est finie !', state: taskStatus.TERMINE, creationDate: new Date(2024, 4, 10) },
      { title: 'Tâche entamée 2', description: 'Cette tâche est aussi entamée !', state: taskStatus.EN_COURS, creationDate: new Date(2024, 4, 4) },
      { title: 'Tâche non commencée 1', description: 'Cette tâche est en attente !', state: taskStatus.A_FAIRE, creationDate: new Date(2024, 4, 8) },
      { title: 'Tâche achevée 2', description: 'Cette tâche est aussi finie !', state: taskStatus.TERMINE, creationDate: new Date(2024, 4, 7) },
      { title: 'Tâche entamée 3', description: 'Cette tâche est également entamée !', state: taskStatus.EN_COURS, creationDate: new Date(2024, 4, 9) },
    ]
  }
```

- Générer un pipe avec la commande ```ng generate pipe formatdate```, et écrire dans le fichier "src/app/task/formatdate.pipe.ts" généré :
```
import { Pipe, PipeTransform } from '@angular/core';
import {DatePipe} from "@angular/common";

@Pipe({
  name: 'FormatdatePipe',
  standalone: true
})
export class FormatdatePipe implements PipeTransform {
  transform(value: any, format: string = 'dd-MM-yyyy') : any {
    const datePipe = new DatePipe('en-Us')
    return datePipe.transform(value, format);
  }
}
```
**Remarque** : Ne pas oublier d'upload ce pipe dans "src/app/task/task.component.ts":
```
  imports: [ColorTaskDirective, FormatdatePipe],
```

- Dans "src/app/task/task.component.html", ajouter : ```<p>Date de création : {{currentTaskComponent.creationDate | FormatdatePipe }}</p>```

## Mettre en place le routeur

- Dans le fichier "src/app/app.routes.ts" existant déjà, définir les routes dont on a besoin :
``` 
export const routes: Routes = [
  {path: 'tasks', component: MainTaskComponent},
  {path: '', redirectTo: 'tasks', pathMatch: 'full'}
];
```
**Remarque** : Dans "src/app/app.component.html", penser à mettre ```<router-outlet></router-outlet>```

## Création d'un module
- Se déplacer au niveau de "src/app"
- Exécuter ```ng generate module tasks --routing``` pour instancier un nouveau module appelé "tasks" (et son propre système de routage)
- Déplacer tous les dossiers précédemment crées (main-task, model, task, task-list) dans le dossier du module "tasks"
- Retirer tous les ```standalone:true``` et les ```imports``` des composants, de la directive et du pipe
- Dans "src/app/tasks/tasks.module.ts", ajouter les déclarations des composants, de la directive et du pipe : 
```
declarations: [
  TaskComponent, MainTaskComponent, TaskListComponent, ColorTaskDirective, FormatdatePipe
],
```
- Définir dans "src/app/tasks/tasks-routing.module.ts" une route qui pointe vers le composant principal :
```const routes: Routes = [{path: '', component: MainTaskComponent}];```
- Remplacer le code de "src/app/app.routes.ts" pour y mettre :
```
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',redirectTo: 'display', pathMatch: 'full'},
  {path: 'display', loadChildren: ()=> import('./tasks/tasks.module').then(m => m.TasksModule)}
];

```

## Création d'un service
Commande : ```ng generate service CRUDTaskListService```
Commande : ```ng generate service ByStatutTaskListService```

## Création d'une Facade
Commande : ```ng g interface CRUDTaskService```

Ajout des fonctions des 2 services crée précedement dans le service :
```
export class TaskFacade {
  constructor(
    private crudService: CRUDTaskListServiceService,
    private byStatutService: ByStatutTaskListService
  ) {}

  // Méthodes CRUD
  getTasks(): Observable<Task[]> {
    return this.crudService.getTasks();
  }

  storeTask(task: Task): void {
    this.crudService.storeTask(task);
  }

  delTask(taskTitle: string): void {
    this.crudService.delTask(taskTitle);
  }

  editTask(updatedTask: Task): void {
    this.crudService.editTask(updatedTask);
  }

  // Méthode pour récupérer les tâches par statut
  getTasksByStatus(status: TaskStatus): Task[] {
    return this.byStatutService.getTasksByStatus(status);
  }
}
```


Les Stands alones sont bien pour gerer cela car les composants