import { EChartOption } from 'echarts';
import { Component } from '@angular/core';

@Component({
  selector: 'ico-tables-example',
  templateUrl: './tables-example.component.html',
  styleUrls: ['./tables-example.component.scss'],
})
export class TablesExampleComponent {
  example6: any;
  example5: any;

  constructor() {
    this.example5 = [
      {
        title: 'Alpino 4.1',
        sub_title: 'WrapTheme To By Again',
        avtars: [
          'assets/images/xs/avatar1.jpg',
          'assets/images/xs/avatar2.jpg',
          'assets/images/xs/avatar3.jpg',
        ],
        sales: '11,200',
        price: '$83',
        total: '$22,520',
        chartOption: this.loadLineAreaChartOptions(
          [3, 5, 1, 6, 5, 4, 8, 3],
          '#37CDE1'
        ),
      },
      {
        title: 'Compass 2.0',
        sub_title: 'WrapTheme To By Again',
        avtars: [
          'assets/images/xs/avatar2.jpg',
          'assets/images/xs/avatar3.jpg',
        ],
        sales: '11,200',
        price: '$66',
        total: '$13,205',
        chartOption: this.loadLineAreaChartOptions(
          [4, 6, 3, 2, 5, 6, 5, 4],
          '#F4516C'
        ),
      },
      {
        title: 'Nexa 1.1',
        sub_title: 'WrapTheme To By Again',
        avtars: [
          'assets/images/xs/avatar4.jpg',
          'assets/images/xs/avatar6.jpg',
        ],
        sales: '12,080',
        price: '$93',
        total: '$17,700',
        chartOption: this.loadLineAreaChartOptions(
          [7, 3, 2, 1, 5, 4, 6, 8],
          '#31DB3D'
        ),
      },
      {
        title: 'Oreo 2.2',
        sub_title: 'ThemeMakker To By Again',
        avtars: [
          'assets/images/xs/avatar1.jpg',
          'assets/images/xs/avatar3.jpg',
          'assets/images/xs/avatar2.jpg',
          'assets/images/xs/avatar9.jpg',
        ],
        sales: '18,200',
        price: '$178',
        total: '$17,700',
        chartOption: this.loadLineAreaChartOptions(
          [3, 1, 2, 5, 4, 6, 2, 3],
          '#2D342E'
        ),
      },
    ];

    this.example6 = [
      {
        i_class: 'fa fa-circle text-success',
        title: 'Twitter',
        text: '862 Records',
        per: '35%',
        per_iclass: 'fa fa-caret-up ',
        chartOption: this.LoadBargapChartOptions([5, 8, 6, 3, 5, 9, 2]),
      },
      {
        i_class: 'fa fa-circle text-info',
        title: 'Facebook',
        text: '451 Records',
        per: '15%',
        per_iclass: 'fa fa-caret-up ',
        chartOption: this.LoadBargapChartOptions([8, 2, 1, 5, -2, 6, -4]),
      },
      {
        i_class: 'fa fa-circle text-warning',
        title: 'Mailchimp',
        text: '502 Records',
        per: '20%',
        per_iclass: 'fa fa-caret-down',
        chartOption: this.LoadBargapChartOptions([2, 3, 3, -2, -8, 4, 8]),
      },
      {
        i_class: 'fa fa-circle text-danger',
        title: 'Google',
        text: '502 Records',
        per: '20%',
        per_iclass: 'fa fa-caret-up ',
        chartOption: this.LoadBargapChartOptions([5, 5, 5, 6, 3, 2, 1]),
      },
      {
        i_class: 'fa fa-circle ',
        title: 'Other',
        text: '237 Records',
        per: '10%',
        per_iclass: 'fa fa-caret-down',
        chartOption: this.LoadBargapChartOptions([5, 8, 6, 3, 5, 9, 2]),
      },
    ];
  }

  loadLineAreaChartOptions(data, color) {
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
        },
      ],
    });
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
        left: '60%',
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
          barWidth: 3,
          animation: true,
          data: data,
        },
      ],
      visualMap: {
        left: 'down',
        min: 0,
        max: 1,
        inRange: {
          color: ['#FF4444', '#3466CC'],
        },
        calculable: false,
        show: false,
      },
    });
  }
}
