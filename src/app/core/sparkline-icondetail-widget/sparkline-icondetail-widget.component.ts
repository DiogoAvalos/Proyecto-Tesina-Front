import { EChartOption } from 'echarts';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ico-sparkline-icondetail-widget',
  templateUrl: './sparkline-icondetail-widget.component.html',
  styleUrls: ['./sparkline-icondetail-widget.component.scss'],
})
export class SparklineIcondetailWidgetComponent {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() mainIcon: string = '';
  @Input() icon: string = '';
  @Input() text: string = '';
  @Input() chartOptions: EChartOption = {};
}
