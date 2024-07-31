import { EChartOption } from 'echarts';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ico-simple-sparkline',
  templateUrl: './simple-sparkline.component.html',
  styleUrls: ['./simple-sparkline.component.scss'],
})
export class SimpleSparklineComponent {
  @Input() class: string = '';
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() value: string = '';
  @Input() text: string = '';
  @Input() chartOptions: EChartOption = {};
}
