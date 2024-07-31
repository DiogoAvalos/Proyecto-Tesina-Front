import { EChartOption } from 'echarts';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ico-donut-chart-card',
  templateUrl: './donut-chart-card.component.html',
  styleUrls: ['./donut-chart-card.component.scss'],
})
export class DonutChartCardComponent {
  @Input() chartOptions: EChartOption = {};
}
