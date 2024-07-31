import { EChartOption } from 'echarts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ico-team-board',
  templateUrl: './team-board.component.html',
  styleUrls: ['./team-board.component.scss']
})
export class TeamBoardComponent implements OnInit {
  chart1: any;
  chart2: any;
  chart3: any;
  chart4: any;
  chart5: any;
  chart6: any;

  constructor() {
    this.chart1 = this.LoadBarChartOptions([2,5,8,3,5,7,1,6],'#7460EE');
    this.chart2 = this.LoadBarChartOptions([2,5,8,3,5,7,1,6],'#F96332');
    this.chart3 = this.LoadBarChartOptions([2,5,8,3,5,7,1,6],'#2CA8FF');
    this.chart4 = this.LoadBarChartOptions([2,5,8,3,5,7,1,6],'#EA4C89');
    this.chart5 = this.LoadBarChartOptions([2,5,8,3,5,7,1,6],'#4183C4');
    this.chart6 = this.LoadBarChartOptions([2,5,8,3,5,7,1,6],'#026466');
  }

  ngOnInit(): void {
  }

  LoadBarChartOptions(data, color){

    let chartOption: EChartOption;
    var xAxisData = [];

    return chartOption = {
        xAxis: {
            show: false,
            data: xAxisData,
        },
        yAxis: {
            show: false
        },
        tooltip:{},
        grid: {
            left: '55%',
            right: '0%',
            bottom: '0%',
            top: '0%',
            containLabel: false
        },
        series: [
            {
                type: 'bar',
                data: data,
                itemStyle: {
                  color: color
                },
                barGap: '2',
                barWidth: 2,
                animation: true
            }
        ]
    };
  }
}
