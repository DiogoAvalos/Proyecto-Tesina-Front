import { Component, Input } from '@angular/core';

@Component({
  selector: 'ico-bg-primary-card',
  templateUrl: './bg-primary-card.component.html',
  styleUrls: ['./bg-primary-card.component.scss'],
})
export class BgPrimaryCardComponent {
  @Input() value: string = '';
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() per: string = '';
  @Input() bgColor: string = '';
}
