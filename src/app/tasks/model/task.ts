export class Task {
    title!: string;                  // "!" indique que la variable peut être vide à l'instanciation
  description!: string;
  state!: TaskStatus;
  creationDate!: Date;
}

export enum TaskStatus {
    A_FAIRE = 'A faire',
    EN_COURS = 'En cours',
    TERMINE = 'Terminé'
  }