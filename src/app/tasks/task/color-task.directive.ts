import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { TaskStatus } from '../model/task';

@Directive({
  selector: '[colorTask]',
  // standalone: true
})

export class ColorTaskDirective implements OnChanges {
  @Input() colorTask!: TaskStatus;

  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    this.applyColor();
  }

  private applyColor(): void {
    let color: string;

    switch (this.colorTask) {
      case TaskStatus.A_FAIRE:
        color = 'red';
        break;
      case TaskStatus.EN_COURS:
        color = 'blue';
        break;
      case TaskStatus.TERMINE:
        color = 'green';
        break;
      default:
        color = 'white';
    }

    this.el.nativeElement.style.color = color;
  }
}