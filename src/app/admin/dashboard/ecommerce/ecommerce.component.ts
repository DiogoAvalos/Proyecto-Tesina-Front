import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'ico-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {

  public newOrderChartOption: EChartOption = {};
  public totalIncomChartOption: EChartOption = {};
  public totalExpensesChartOption: EChartOption = {};
  public newUserChartOption: EChartOption = {};
  public deviceOption: EChartOption = {};
  public incomeValueChartOption: EChartOption = {};
  constructor() {
    this.newOrderChartOption = this.loadbarChartOptions([2,9,8,7,4,4,6,7,3,4,9,1,5,1,7,8,4,2,1,4,1,2,4,6,7,8,3,2,1,2,5], "#39afa6", "#73cec7");
    this.totalIncomChartOption = this.loadbarChartOptions([2,7,8,3,2,1,2,5,6,7,3,4,9,1,5,9,8,7,4,4,4,1,2,4,6,1,7,8,4,2,1], "#39afa6", "#73cec7");
    this.totalExpensesChartOption = this.loadbarChartOptions([2,9,8,7,4,4,4,9,1,5,1,7,8,4,2,1,4,1,2,4,6,7,8,3,2,1,2,5,6,7,3], "#39afa6", "#73cec7");
    this.newUserChartOption = this.loadbarChartOptions([2,9,8,7,4,4,4,1,2,4,6,7,8,3,2,1,2,5,6,7,3,4,9,1,5,1,7,8,4,2,1], "#39afa6", "#73cec7");

    this.deviceOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            bottom: '0',
            data: ['Online', 'Offline']
        },
        series: [
            {
                name: 'Value',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {
                      value: 569,
                      name: 'Online',
                      itemStyle: {
                        color: 'rgb(99, 122, 174)'
                      }
                    },
                    {
                      value: 335,
                      name: 'Offline',
                      itemStyle: {
                        color: 'rgb(89, 196, 188)'
                      }
                    },
                ]
            }
        ]
    };

    this.incomeValueChartOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                show: false,
            }
        ],
        yAxis: [
            {
                type: 'value',
                show: false,
            }
        ],
        series: [
            {
                name: 'Value',
                type: 'bar',
                stack: 'value',
                data: [11, 8, 15, 18, 19, 17, 7, 7, 5, 7, 17, 7],
                barGap: '25',
                barWidth:'20',
                itemStyle:{
                    color: 'rgb(89, 196, 188)'
                }
            },
            {
                name: 'Income',
                type: 'bar',
                stack: 'value',
                data: [7, 7, 5, 7, 9, 12, 8, 15, 18, 19, 7, 9],
                barGap: '25',
                barWidth:'20',
                itemStyle:{
                    color: 'rgb(99, 122, 174)'
                }
            },
        ]
    };
  }

  ngOnInit(): void {
  }

  loadbarChartOptions(data, color, areaColor) {
        let chartOption: EChartOption;

        return chartOption = {
            tooltip: {},
            grid: {
              top: '0%',
              left: '0%',
              right: '50%',
              bottom: '0%',
            },
            xAxis: {
                type: 'category',
                data: data,
                show: false,
            },
            yAxis: {
                type: 'value',
                show: false,
            },
            series: [{
                data: data,
                type: 'bar',
                showBackground: false,
                backgroundStyle: {
                    color: 'rgba(220, 220, 220, 0.8)'
                },
                barWidth: 4,
                color: '#FFFFFF',
                barCategoryGap: '5%'
            }]
        };
  }

}
