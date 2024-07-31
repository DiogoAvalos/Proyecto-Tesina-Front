import { Component, Input } from '@angular/core';

@Component({
  selector: 'ico-simple-progress',
  templateUrl: './simple-progress.component.html',
  styleUrls: ['./simple-progress.component.scss'],
})
export class SimpleProgressComponent {
  @Input() color: string = '';
  @Input() value: string = '';
  @Input() height: string = '';
}
