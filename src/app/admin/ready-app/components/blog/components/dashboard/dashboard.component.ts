import { EChartOption } from 'echarts';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  ChartComponent,
} from 'ng-apexcharts';

export type BasicColumnChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

export type lineColumnChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'ico-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('basicColumn') basicColumn: ChartComponent;
  public basicColumnChartOptions: Partial<BasicColumnChartOptions>;

  @ViewChild('linecolumn') linecolumn: ChartComponent;
  public lineColumnChartOptions: Partial<lineColumnChartOptions>;

  public iconDetailSparklineOptions: Array<any> = new Array<any>();
  twitterKnob: EChartOption = {};
  facebook: EChartOption = {};
  instagram: EChartOption = {};
  googlePlus: EChartOption = {};

  constructor() {
    this.basicColumnChartOptions = {
      series: [
        {
          name: 'Return',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: 'New',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%'
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    };

    this.lineColumnChartOptions = {
      series: [
        {
          name: 'Website Blog',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: 'Social Media',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      stroke: {
        width: [0, 4],
      },
      dataLabels: {
        enabled: false,
      },
      labels: [
        '01 Jan 2001',
        '02 Jan 2001',
        '03 Jan 2001',
        '04 Jan 2001',
        '05 Jan 2001',
        '06 Jan 2001',
        '07 Jan 2001',
        '08 Jan 2001',
        '09 Jan 2001',
        '10 Jan 2001',
        '11 Jan 2001',
        '12 Jan 2001',
      ],
      xaxis: {
        type: 'datetime',
      },
      yaxis: [
        {
          title: {
            text: 'Website Blog',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Social Media',
          },
        },
      ],
    };

    this.iconDetailSparklineOptions = [
      {
        title: 'Likes',
        value: '22,500',
        mainIcon: 'fa fa-thumbs-o-up',
        icon: 'fa fa-level-up',
        text: 'Analytics for last Month',
        sparklineOption: this.loadLineAreaChartOptions(
          [
            2, 3, 1, 5, 4, 2, 3, 1, 5, 4, 7, 8, 2, 3, 1, 4, 6, 5, 4, 4, 4, 7, 8,
            2, 3, 1, 4, 6, 5, 4,
          ],
          '#39afa6',
          '#73cec7'
        ),
      },
      {
        title: 'Comments',
        value: '500',
        mainIcon: 'fa fa-comment',
        icon: 'fa fa-level-up',
        text: 'Analytics for last Month',
        sparklineOption: this.loadLineAreaChartOptions(
          [
            7, 8, 2, 3, 1, 4, 6, 2, 3, 1, 5, 4, 7, 8, 2, 3, 1, 4, 6, 5, 4, 4, 2,
            3, 1, 5, 4, 5, 4, 4,
          ],
          '#ffa901',
          '#efc26b'
        ),
      },
      {
        title: 'Share',
        value: '2,215',
        mainIcon: 'fa fa-share-alt',
        icon: 'fa fa-level-up',
        text: 'Analytics for last Month',
        sparklineOption: this.loadLineAreaChartOptions(
          [
            2, 3, 1, 5, 4, 7, 8, 2, 3, 1, 4, 6, 5, 4, 4, 2, 3, 1, 5, 4, 7, 8, 2,
            3, 1, 4, 6, 5, 4, 4,
          ],
          '#38c172',
          '#84d4a6'
        ),
      },
      {
        title: 'VIEW',
        value: '421,215',
        mainIcon: 'fa fa-eye',
        icon: 'fa fa-level-down',
        text: 'Analytics for last Month',
        sparklineOption: this.loadLineAreaChartOptions(
          [
            2, 3, 1, 5, 4, 7, 8, 2, 3, 1, 4, 6, 5, 4, 4, 1, 5, 4, 7, 8, 2, 3, 1,
            4, 6, 5, 4, 4, 2, 3,
          ],
          '#226fd8',
          '#7ea7de'
        ),
      },
    ];

    this.twitterKnob = this.knobChartOption(66, '#4CAF50');
    this.facebook = this.knobChartOption(26, '#7b69ec');
    this.instagram = this.knobChartOption(76, '#f9bd53');
    this.googlePlus = this.knobChartOption(76, '#f9bd53');
  }

  knobChartOption(per, color) {
    return {
      title: {
        text: per + '%',
        x: 'center',
        y: 'center',
        textStyle: {
          color: color,
          fontSize: 14,
          fontWeight: 'bolder',
        },
      },
      tooltip: {
        show: false,
      },
      series: {
        type: 'pie',
        radius: [40, 43],
        clockWise: true,
        itemStyle: {
          normal: {
            label: {
              show: false,
              formatter: function (params) {
                return 100 - per + '%';
              },
              textStyle: {
                baseline: 'top',
              },
            },
          },
        },
        data: [
          {
            value: per,
            itemStyle: {
              normal: {
                color: color,
                label: {
                  show: true,
                  position: 'center',
                  formatter: '{b}',
                  textStyle: {
                    baseline: 'bottom',
                  },
                },
                labelLine: {
                  show: false,
                },
              },
            },
          },
          {
            value: 100 - per,
            itemStyle: {
              normal: {
                color: '#ccc',
                label: {
                  show: true,
                  position: 'center',
                },
                labelLine: {
                  show: false,
                },
              },
              emphasis: {
                color: 'rgba(0,0,0,0)',
              },
            },
          },
        ],
      },
    };
  }

  loadLineAreaChartOptions(data, color, areaColor) {
    let chartOption: EChartOption;
    let xAxisData: Array<any> = new Array<any>();

    data.forEach((element) => {
      xAxisData.push('');
    });

    return (chartOption = {
      xAxis: {
        type: 'category',
        show: false,
        data: xAxisData,
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 1,
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params, ticket, callback) {
          return (
            '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' +
            color +
            ';"></span>' +
            params[0].value
          );
        },
      },
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '0%',
        containLabel: false,
      },
      series: [
        {
          data: data,
          type: 'line',
          showSymbol: false,
          symbolSize: 1,
          lineStyle: {
            color: color,
            width: 1,
          },
          areaStyle: {
            color: areaColor,
          },
        },
      ],
    });
  }

  ngOnInit(): void {}
}
