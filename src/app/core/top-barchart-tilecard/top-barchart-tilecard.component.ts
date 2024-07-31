import { EChartOption } from 'echarts';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ico-top-barchart-tilecard',
  templateUrl: './top-barchart-tilecard.component.html',
  styleUrls: ['./top-barchart-tilecard.component.scss'],
})
export class TopBarchartTilecardComponent {
  @Input() text: string = '';
  @Input() value: string = '';
  @Input() chartOptions: EChartOption = {};
}
