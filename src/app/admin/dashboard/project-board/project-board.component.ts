import { EChartOption } from 'echarts';
import { Component, OnInit } from '@angular/core';
import { NestableSettings } from 'ngx-nestable/lib/nestable.models';

@Component({
  selector: 'ico-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.scss']
})
export class ProjectBoardComponent implements OnInit {
  public incomeAnalysisChartOption: EChartOption = {};
  public salesIncomeChartOption: EChartOption = {};
  public reportBySecor: EChartOption = {};
  public workloadByTeamChartOption: EChartOption = {};
  public designKnobOptions: EChartOption = {};
  public developmentnKnobOptions: EChartOption = {};

  public options = { fixedDepth: true } as NestableSettings;

  public list = [
    { 'id': 1 },
    {
      'expanded': true,
      'id': 2, 'children': [
        { 'id': 3 },
        { 'id': 4 },
        {
          'expanded': false,
          'id': 5, 'children': [
            { 'id': 6 },
            { 'id': 7 },
            { 'id': 8 }
          ]
        },
        { 'id': 9 },
        { 'id': 10 }
      ]
    },
    { 'id': 11 }
  ];

  constructor() {

    this.incomeAnalysisChartOption = this.loadLineAreaChartOptions([4,1,5,2,7,3,4], "#39afa6", "#73cec7");
    this.salesIncomeChartOption = this.loadLineAreaChartOptions([1,4,2,3,6,2], "#ffa901", "#efc26b");

    this.reportBySecor = {
          tooltip : {},
          series: [
              {
                  name: 'value',
                  type: 'pie',
                  radius: '90%',
                  center: ['50%', '50%'],
                  label: {
                      normal: {
                          formatter: '{c}%',
                          position: 'inside'
                      }
                  },
                  data: [
                      {value: 47.4, name: 'Realestate',itemStyle: {color: "#49C4BC"}},
                      {value: 33.1, name: 'Education', itemStyle: {color: "#637AAE"}},
                      {value: 10.5, name: 'Finance', itemStyle: {color: "#4CC5BC"}},
                      {value: 9.0, name: 'Healthcare', itemStyle: {color: "#2FAAA1"}}
                  ],
                  emphasis: {
                      itemStyle: {
                          shadowBlur: 50,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
    };

    this.workloadByTeamChartOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            bottom: '0',
            data: ['Week', 'Month']
        },
        grid: {
            top: '0%',
            left: '0%',
            right: '2%',
            bottom: '12%',
            containLabel: true
        },
        xAxis: {
          splitLine: {
            show: false
          },
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          splitLine: {
            show: false
          },
          type: 'category',
          data: ['Design', 'Dev', 'Marketing', 'Sales', 'QA', 'Finance']
        },
        series: [
            {
                name: 'Week',
                type: 'bar',
                data: [37, 41, 17, 15, 33, 23],
                barWidth: 10,
                barGap: '0',
                itemStyle:{
                    color: '#49C4BC'
                }
            },
            {
                name: 'Month',
                type: 'bar',
                data: [42, 29, 17, 8, 17, 17],
                barWidth: 10,
                barGap: '0',
                itemStyle:{
                    color: '#637AAE'
                }
            }
        ]
    };

    this.designKnobOptions = {
        title: {
            text: 73 + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#17a2b8',
                fontSize: 14,
                fontWeight: 'bolder'
            }
        },
        tooltip: {
            show: false
        },
        series: {
            type: 'pie',
            radius: [55, 58],
            clockWise: true,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        formatter: function (params) {
                            return 100 - 73 + '%'
                        },
                        textStyle: {
                            baseline: 'top'
                        }
                    }
                },
            },
            data: [
                {
                    value: 73,
                    itemStyle: {
                        normal: {
                            color: '#17a2b8',
                            label: {
                                show: true,
                                position: 'center',
                                formatter: '{b}',
                                textStyle: {
                                    baseline: 'bottom'
                                }
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                },
                {
                    value: 100 - 73,
                    itemStyle: {
                        normal: {
                            color: '#ccc',
                            label: {
                                show: true,
                                position: 'center'
                            },
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                }
            ]
        }
    };
    this.developmentnKnobOptions = {
      title: {
          text: 46 + '%',
          x: 'center',
          y: 'center',
          textStyle: {
              color: '#ffc107',
              fontSize: 14,
              fontWeight: 'bolder'
          }
      },
      tooltip: {
          show: false
      },
      series: {
          type: 'pie',
          radius: [55, 58],
          clockWise: true,
          itemStyle: {
              normal: {
                  label: {
                      show: false,
                      formatter: function (params) {
                          return 100 - 46 + '%'
                      },
                      textStyle: {
                          baseline: 'top'
                      }
                  }
              },
          },
          data: [
              {
                  value: 46,
                  itemStyle: {
                      normal: {
                          color: '#ffc107',
                          label: {
                              show: true,
                              position: 'center',
                              formatter: '{b}',
                              textStyle: {
                                  baseline: 'bottom'
                              }
                          },
                          labelLine: {
                              show: false
                          }
                      }
                  }
              },
              {
                  value: 100 - 46,
                  itemStyle: {
                      normal: {
                          color: '#ccc',
                          label: {
                              show: true,
                              position: 'center'
                          },
                          labelLine: {
                              show: false
                          }
                      },
                      emphasis: {
                          color: 'rgba(0,0,0,0)'
                      }
                  }
              }
          ]
      }
  };
  }

  ngOnInit(): void {
  }

  loadLineAreaChartOptions(data, color, areaColor) {
    let chartOption: EChartOption;
    let xAxisData: Array<any> = new Array<any>();

    data.forEach(element => {
        xAxisData.push("");
    });

    return chartOption = {
        xAxis: {
            type: 'category',
            show: false,
            data: xAxisData,
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
            show: false,
            min: 1
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params, ticket, callback) {
                return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>' + params[0].value;
            }
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '0%',
            containLabel: false
        },
        series: [{
            data: data,
            type: 'line',
            showSymbol: false,
            symbolSize: 1,
            lineStyle: {
                color: color,
                width: 1
            },
            areaStyle: {
                color: areaColor
            }
        }]
    };
  }

}
