import { Component, Input } from '@angular/core';

@Component({
  selector: 'ico-baic-detail-card',
  templateUrl: './baic-detail-card.component.html',
  styleUrls: ['./baic-detail-card.component.scss'],
})
export class BaicDetailCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() mainIcon: string = '';
  @Input() icon: string = '';
  @Input() per: string = '';
  @Input() text: string = '';
}
