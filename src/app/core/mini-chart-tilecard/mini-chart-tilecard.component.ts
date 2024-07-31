import { EChartOption } from 'echarts';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ico-mini-chart-tilecard',
  templateUrl: './mini-chart-tilecard.component.html',
  styleUrls: ['./mini-chart-tilecard.component.scss'],
})
export class MiniChartTilecardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() chartOptions: EChartOption = {};
}
