import { Component, Input } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'ico-detail-sparkline-card',
  templateUrl: './detail-sparkline-card.component.html',
  styleUrls: ['./detail-sparkline-card.component.scss'],
})
export class DetailSparklineCardComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() chartOptions: EChartOption = {};
}
