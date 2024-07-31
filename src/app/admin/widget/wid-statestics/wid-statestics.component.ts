import { EChartOption } from 'echarts';
import { Component } from '@angular/core';

@Component({
  selector: 'ico-wid-statestics',
  templateUrl: './wid-statestics.component.html',
  styleUrls: ['./wid-statestics.component.scss'],
})
export class WidStatesticsComponent {
  public simpleSparklineOptions: Array<any> = new Array<any>();
  public likeChartOption: any;
  public commentChartOption: any;
  public shareChartOption: any;
  public viewChartOption: any;
  public minichartOptions: Array<any> = new Array<any>();
  public topBarchartOptions: Array<any> = new Array<any>();
  public iconValuetile: Array<any> = new Array<any>();
  public satisfactionRate: EChartOption = {};
  public projectPanding: EChartOption = {};
  public productivityGoal: EChartOption = {};
  public totalRevenue: EChartOption = {};
  public sparklinechartMdOptions: Array<any> = new Array<any>();

  public orderReceived: EChartOption = {};
  public totalSale: EChartOption = {};
  public totalProfit: EChartOption = {};

  constructor() {
    this.simpleSparklineOptions = [
      {
        title: 'NEARNINGS',
        value: '$22,500',
        icon: '',
        text: 'Analytics for last week',
        sparklineOption: this.loadLineAreaChartOptions(
          [1, 4, 1, 3, 7, 1],
          '#f79647',
          '#fac091'
        ),
      },
      {
        title: 'SALES',
        value: '$500',
        icon: '',
        text: 'Analytics for last week',
        sparklineOption: this.loadLineAreaChartOptions(
          [1, 4, 2, 3, 6, 2],
          '#604a7b',
          '#a092b0'
        ),
      },
      {
        title: 'VISITS',
        value: '$21,215',
        icon: '',
        text: 'Analytics for last week',
        sparklineOption: this.loadLineAreaChartOptions(
          [1, 4, 2, 3, 1, 5],
          '#4aacc5',
          '#92cddc'
        ),
      },
      {
        title: 'LIKES',
        value: '$421,215',
        icon: '',
        text: 'Analytics for last week',
        sparklineOption: this.loadLineAreaChartOptions(
          [1, 3, 5, 1, 4, 2],
          '#4f81bc',
          '#95b3d7'
        ),
      },
    ];

    this.minichartOptions = [
      {
        title: 'Population',
        value: '4,254',
        miniChartOption: this.LoadBargapChartOptions([
          6, 4, 8, 6, 8, 10, 5, 6, 7, 9, 5,
        ]),
      },
      {
        title: 'Usage',
        value: '98%',
        miniChartOption: this.LoadPieChartOption(),
      },
      {
        title: 'Page Views',
        value: '1,195',
        miniChartOption: this.LoadBargapChartOptions([
          4, 6, -3, -1, 2, -2, 4, 3, 6, 7, -2, 3,
        ]),
      },
      {
        title: 'Growth',
        value: '$1,243',
        miniChartOption: this.LoadSmoothLineOptions([9, 4, 6, 5, 6, 4, 7, 3]),
      },
    ];

    this.topBarchartOptions = [
      {
        text: '47% Average',
        value: '457 512',
        chartOption: this.LoadBarChartWithCenterOptions(
          [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1],
          '#00CED1'
        ),
      },
      {
        text: '13% Average',
        value: '236 512',
        chartOption: this.LoadBarChartWithCenterOptions(
          [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1],
          '#e4d354'
        ),
      },
      {
        text: '47% Average',
        value: '236 512',
        chartOption: this.LoadBarChartWithCenterOptions(
          [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4],
          '#7cb5ec'
        ),
      },
      {
        text: '47% Average',
        value: '236 512',
        chartOption: this.LoadBarChartWithCenterOptions(
          [8, 7, 6, 5, 4, 3, 2, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4],
          '#f15c80'
        ),
      },
    ];

    this.likeChartOption = this.loadLineAreaChartOptions(
      [
        2, 3, 1, 5, 4, 7, 8, 2, 3, 1, 4, 6, 5, 4, 4, 2, 3, 1, 5, 4, 7, 8, 2, 3,
        1, 4, 6, 5, 4, 4,
      ],
      '#62a6ef',
      '#62a6ef'
    );
    this.commentChartOption = this.LoadBarChartOptions(
      [
        2, 3, 1, 5, 4, 7, 8, 2, 3, 1, 4, 6, 5, 4, 4, 2, 3, 1, 5, 4, 7, 8, 2, 3,
        1, 4, 6, 5, 4, 4,
      ],
      '#E66D7E'
    );
    this.shareChartOption = this.LoadSmoothLineOptions([
      12, 4, 6, 15, 5, 5, 5, 6, 8, 9, 7, 2, 11, 5, 4, 8, 17, 10, 18, 0, 2, 0, 1,
      8, 3, 8, 9, 6,
    ]);
    this.viewChartOption = this.LoadBargapChartOptions([
      10, 18, 0, 2, 0, 1, 8, 3, 8, 9, 6, 3, 2, 5, 1, 4, 2, 3, 1, 5, 4, 7, 8, 2,
      3, 12, 4, 6, 15, 5, 5, 5, 6, 8, 9, 7, 2, 11, 5, 4, 8, 17, 10, 18, 0, 2, 0,
      1, 8, 3, 8, 9, 6, 3, 2, 5, 1, 4, 2, 3, 1, 5, 4, 7, 8, 2, 3, 12, 4, 6, 15,
      5, 5, 5, 6, 8, 9, 7, 2, 11, 5, 4, 8, 17,
    ]);

    this.iconValuetile = [
      {
        class: 'text-info',
        value: '53,251',
        name: 'Properties',
        icon: 'fa fa-building',
      },
      {
        class: 'text-warning',
        value: '62%',
        name: 'Growth',
        icon: 'fa fa-area-chart',
      },
      {
        class: 'text-danger',
        value: '$3205',
        name: 'Total Sales',
        icon: 'fa fa-shopping-cart',
      },
      {
        class: '',
        value: '3,217',
        name: 'Rented',
        icon: 'fa fa-tag',
      },
    ];

    this.satisfactionRate = this.loadKnobChart(66, 'rgb(38, 218, 210)');
    this.projectPanding = this.loadKnobChart(26, '#7b69ec');
    this.productivityGoal = this.loadKnobChart(76, '#f9bd53');
    this.totalRevenue = this.loadKnobChart(88, '#00adef');

    this.sparklinechartMdOptions = [
      {
        value: '501',
        name: 'Orders Received',
        chartOptions: this.loadLineAreaChartOptions(
          [1, 4, 2, 6, 5, 2, 3, 8, 5, 2],
          '#A095E5',
          '#A095E5'
        ),
      },
      {
        value: '2501',
        name: 'Total Sales',
        chartOptions: this.loadLineAreaChartOptions(
          [1, 4, 2, 6, 5, 2, 3, 8, 5, 2],
          '#75C3F2',
          '#75C3F2'
        ),
      },
      {
        value: '6051',
        name: 'Total Profit',
        chartOptions: this.loadLineAreaChartOptions(
          [1, 4, 2, 6, 5, 2, 3, 8, 5, 2],
          '#FC7B92',
          '#FC7B92'
        ),
      },
    ];

    this.orderReceived = this.loadLineAreaChartOptions(
      [1, 4, 2, 6, 5, 2, 3, 8, 5, 2],
      '#A095E5',
      '#A095E5'
    );
    this.totalSale = this.loadLineAreaChartOptions(
      [1, 4, 2, 6, 5, 2, 3, 8, 5, 2],
      '#75C3F2',
      '#75C3F2'
    );
    this.totalProfit = this.loadLineAreaChartOptions(
      [1, 4, 2, 6, 5, 2, 3, 8, 5, 2],
      '#FC7B92',
      '#FC7B92'
    );
  }

  loadKnobChart(per, color) {
    let chartOption: EChartOption;

    return (chartOption = {
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
        radius: [44, 46],
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
    });
  }

  LoadPieChartOption() {
    let chartOption: EChartOption;

    return (chartOption = {
      tooltip: {},
      series: [
        {
          type: 'pie',
          labelLine: {
            show: false,
          },
          data: [
            { value: 35, itemStyle: { color: '#49C4BC' } },
            { value: 25, itemStyle: { color: '#637AAE' } },
            { value: 8, itemStyle: { color: '#4CC5BC' } },
            { value: 30, itemStyle: { color: '#2FAAA1' } },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 50,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    });
  }

  LoadSmoothLineOptions(data) {
    let chartOption: EChartOption;
    return (chartOption = {
      xAxis: {
        show: false,
        type: 'category',
      },
      yAxis: {
        show: false,
        type: 'value',
      },
      tooltip: {},
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
          lineStyle: {
            color: '#23c596',
          },
        },
      ],
    });

    // chartOption = {
    //     xAxis: {
    //         show: false,
    //         type: 'category',
    //         boundaryGap: false
    //     },
    //     yAxis: {
    //         show: false,
    //         type: 'value',
    //     },
    //     tooltip: {},
    //     grid: {
    //         left: '0%',
    //         right: '0%',
    //         bottom: '0%',
    //         top: '0%',
    //         containLabel: false
    //     },
    //     series: [
    //         {
    //             type: 'line',
    //             smooth: 0.6,
    //             symbol: 'none',
    //             lineStyle: {
    //                 color: '#23c596',
    //                 width: 5
    //             },
    //             data:data
    //         }
    //     ]
    // };
  }

  LoadBargapChartOptions(data) {
    let chartOption: EChartOption;
    var xAxisData = [];

    return (chartOption = {
      xAxis: {
        show: false,
        data: xAxisData,
      },
      yAxis: {
        show: false,
      },
      tooltip: {},
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '0%',
        containLabel: false,
      },
      series: [
        {
          // For shadow
          type: 'bar',
          itemStyle: {
            color: '#f7cf5c',
          },
          barGap: '-100%',
          animation: false,
        },
        {
          type: 'bar',
          data: data,
        },
      ],
    });
  }

  LoadBarChartOptions(data, color) {
    let chartOption: EChartOption;
    var xAxisData = [];

    return (chartOption = {
      xAxis: {
        show: false,
        data: xAxisData,
      },
      yAxis: {
        show: false,
      },
      tooltip: {},
      grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '0%',
        containLabel: false,
      },
      series: [
        {
          // For shadow
          type: 'bar',
          itemStyle: {
            color: color,
          },
          barGap: '-100%',

          barWidth: 5,
          animation: false,
        },
        {
          type: 'bar',
          data: data,
        },
      ],
    });
  }

  LoadBarChartWithCenterOptions(data, color) {
    let chartOption: EChartOption;
    var xAxisData = [];

    return (chartOption = {
      xAxis: {
        show: false,
        data: xAxisData,
      },
      yAxis: {
        show: false,
      },
      tooltip: {},
      grid: {
        left: '20%',
        right: '20%',
        bottom: '%',
        top: '40%',
        containLabel: false,
      },
      series: [
        {
          // For shadow
          type: 'bar',
          color: color,
          barGap: '-100%',

          barWidth: 5,
          animation: false,
          data: data,
        },
      ],
    });
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
}
