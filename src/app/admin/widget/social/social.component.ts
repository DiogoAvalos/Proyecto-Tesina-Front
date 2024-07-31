import { Component, ViewChild } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
};

@Component({
  selector: 'ico-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @ViewChild('chart1') chart1: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() {
    this.chartOptions = {
      series: [66],
      chart: {
        height: 170,
        type: 'radialBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -0,
          endAngle: 350,
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              color: '#4CAF50',
              fontSize: '20px',
              show: true,
            },
          },
        },
      },
      fill: {
        colors: ['#4CAF50'],
      },
      stroke: {
        lineCap: 'round',
      },
    };

    this.chartOptions1 = {
      series: [27],
      chart: {
        height: 170,
        type: 'radialBar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -0,
          endAngle: 350,
          dataLabels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              color: '#4CAF50',
              fontSize: '20px',
              show: true,
            },
          },
        },
      },
      fill: {
        colors: ['#7B69EC'],
      },
      stroke: {
        lineCap: 'round',
      },
    };
  }
}
