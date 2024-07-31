import { Component } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ico-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
})
export class TaskboardComponent {
  planned = [
    {
      code: '#L1008',
      title: 'Job title',
    },
    {
      code: '#L1010',
      title: 'Job title',
    },
  ];

  inprogress = [
    {
      code: '#L1011',
      title: 'Job title',
    },
  ];

  completed = [
    {
      code: '#L1005',
      title: 'Job title',
    },
  ];
  pre: {};
  plannedBlank: number;
  inprogressBlank: number;
  completedBlank: number;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log('test');
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log('test111111');
    }

    this.pre = {
      planned: this.planned,
      inprogress: this.inprogress,
      completed: this.completed,
    };

    this.plannedBlank = 1;
    this.inprogressBlank = 1;
    this.completedBlank = 1;

    if (!this.pre['planned'].length) {
      this.plannedBlank = 0;
    }
    if (!this.pre['inprogress'].length) {
      this.inprogressBlank = 0;
    }
    if (!this.pre['completed'].length) {
      this.completedBlank = 0;
    }
  }
}
