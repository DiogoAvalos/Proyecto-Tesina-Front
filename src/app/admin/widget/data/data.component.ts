import { EChartOption } from 'echarts';
import { Component } from '@angular/core';

@Component({
  selector: 'ico-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent {
  sparklineChart: EChartOption = {};

  constructor() {
    this.sparklineChart = {
      xAxis: {
        show: false,
        data: [],
      },
      yAxis: {
        show: false,
      },
      tooltip: {},
      grid: {
        left: '55%',
        right: '0%',
        bottom: '0%',
        top: '0%',
        containLabel: false,
      },
      series: [
        {
          // For shadow
          type: 'bar',
          animation: true,
        },
        {
          type: 'bar',
          data: [2, 5, 8, 3, 5, 7, 1, 6],
          barWidth: 2,
          itemStyle: {
            color: '#7460EE',
          },
        },
      ],
    };
  }
}
