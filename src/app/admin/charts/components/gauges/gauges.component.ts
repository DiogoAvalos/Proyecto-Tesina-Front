import { EChartOption } from 'echarts';
import { Component } from '@angular/core';

@Component({
  selector: 'ico-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.scss'],
})
export class GaugesComponent {
  public canvasWidth = 400;
  public needleValue = 65;
  public centralLabel = '';
  public options = {
    hasNeedle: true,
    needleColor: 'gray',
    needleUpdateSpeed: 1000,
    arcColors: ['rgb(44, 151, 222)', 'lightgray'],
    arcDelimiters: [30],
    rangeLabel: ['0', '100'],
    needleStartValue: 50,
  };

  public zonecanvasWidth = 400;
  public zoneneedleValue = 65;
  public zonecentralLabel = '';
  public zoneoptions = {
    hasNeedle: true,
    needleColor: 'black',
    needleStartValue: 50,
    arcColors: ['rgb(255,84,84)', 'rgb(239,214,19)', 'rgb(61,204,91)'],
    arcDelimiters: [40, 60],
    rangeLabel: ['52', '8'],
  };

  public gaugeOption: EChartOption = {};

  constructor() {
    this.gaugeOption = {
      series: [
        {
          name: '',
          type: 'gauge',
          detail: { formatter: '{value}%' },
          data: [{ value: 70 }],
        },
      ],
    };
  }
}
