import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '',redirectTo: 'display', pathMatch: 'full'},
  {path: 'display', loadChildren: ()=> import('./tasks/tasks.module').then(m => m.TasksModule)}
];