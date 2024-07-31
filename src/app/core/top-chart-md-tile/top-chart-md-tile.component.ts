import { EChartOption } from 'echarts';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ico-top-chart-md-tile',
  templateUrl: './top-chart-md-tile.component.html',
  styleUrls: ['./top-chart-md-tile.component.scss'],
})
export class TopChartMdTileComponent {
  @Input() id: string = '';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() chartOptions: EChartOption = {};
}
