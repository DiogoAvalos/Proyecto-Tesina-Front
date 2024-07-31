import { Component, Input } from '@angular/core';

@Component({
  selector: 'ico-analytics-week-card',
  templateUrl: './analytics-week-card.component.html',
  styleUrls: ['./analytics-week-card.component.scss'],
})
export class AnalyticsWeekCardComponent {
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() per: string = '';
}
