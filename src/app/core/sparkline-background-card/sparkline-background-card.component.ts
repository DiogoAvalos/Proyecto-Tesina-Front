import { Component, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'ico-sparkline-background-card',
  templateUrl: './sparkline-background-card.component.html',
  styleUrls: ['./sparkline-background-card.component.scss'],
})
export class SparklineBackgroundCardComponent {
  @Input() mainClass: string = '';
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() text: string = '';
  @Input() secIcon: string = '';
  @Input() perValue: string = '';
  @Input() chartOptions: EChartOption = {};
}
