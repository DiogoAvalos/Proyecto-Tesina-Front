import { EChartOption } from 'echarts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ico-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.scss']
})
export class DemographicComponent implements OnInit {
  public bgCardOption:Array<any> = new Array<any>();
  public conversionByAgeOption: EChartOption = {};
  public sessionPageViewOption: EChartOption = {};
  public incomeValueChartOption: EChartOption = {};
  public MaleknobOptions: EChartOption = {};
  public femaleknobOptions: EChartOption = {};

  constructor() {

    this.bgCardOption =
      [
        {
          value: "2,120",
          title: "Users",
          icon: "fa-level-up",
          per: " 19%",
          bgColor: "primary-bg"
        },{
          value: "2,120",
          title: "Sessions",
          icon: "fa-level-up",
          per: " 13%",
          bgColor: "secondary-bg"
        },{
          value: "2,120",
          title: "Page Views",
          icon: "fa-level-down",
          per: " 7%",
          bgColor: "bg-info"
        },{
          value: "2,120",
          title: "Bounce rate",
          icon: "fa-level-up",
          per: " 11%",
          bgColor: "bg-dark"
        }
      ];

      this.conversionByAgeOption = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            bottom: '0',
            data: ['10-20 Age', '30-6- Age']
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
          data: ['Oceania', 'Australia', 'Europ', 'Africa', 'Asia', 'Americas']
        },
        series: [
            {
                name: '10-20 Age',
                type: 'bar',
                data: [37, 41, 17, 15, 33, 23],
                barGap: '0',
                barWidth: 10,
                itemStyle:{
                    color: '#636D76'
                }
            },
            {
                name: '30-6- Age',
                type: 'bar',
                data: [42, 29, 17, 8, 17, 17],
                barWidth: 10,
                barGap: '0',
                itemStyle:{
                    color: '#939697'
                }
            }
        ]
    };

      this.sessionPageViewOption = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            bottom: '0',
            data: ['Session', 'Pageviews']
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
          data: ['Oceania', 'Australia', 'Europ', 'Africa', 'Asia', 'Americas']
        },
        series: [
            {
                name: 'Session',
                type: 'bar',
                data: [37, 41, 17, 15, 33, 23],
                barWidth: 10,
                barGap: '0',
                itemStyle:{
                  color: '#636D76'
                }
            },
            {
                name: 'Pageviews',
                type: 'bar',
                data: [42, 29, 17, 8, 17, 17],
                barWidth: 10,
                barGap: '0',
                itemStyle:{
                  color: '#939697'
                }
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
      legend: {
          bottom: '0',
          data: ['Value', 'Income']
      },
      grid: {
        left: '0%',
        right: '2%',
        bottom: '12%',
        containLabel: true
      },
      xAxis: [
          {
            splitLine: {
              show: false
            },
            type: 'category',
            data: ['London', 'Tokio', 'Paris', 'Sydney', 'Berlin']
          }
      ],
      yAxis: [
          {
            splitLine: {
              show: false
            },
            type: 'value'
          }
      ],
      series: [
          {
              name: 'Value',
              type: 'bar',
              stack: 'value',
              data: [120, 132, 101, 134, 90, 230, 210],
              barGap: '25',
              barWidth:'20',
              itemStyle:{
                  color: '#939697'
              }
          },
          {
            name: 'Income',
            type: 'bar',
            stack: 'value',
            data: [220, 182, 191, 234, 290, 330, 310],
            barGap: '25',
            barWidth:'20',
            itemStyle:{
                color: '#636D76'
            }
          },
      ]
    };

    this.MaleknobOptions = {
        title: {
            text: 65 + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#59c4bc',
                fontSize: 14,
                fontWeight: 'bolder'
            }
        },
        tooltip: {
            show: false
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
                            return 100 - 65 + '%'
                        },
                        textStyle: {
                            baseline: 'top'
                        }
                    }
                },
            },
            data: [
                {
                    value: 65,
                    itemStyle: {
                        normal: {
                            color: '#59c4bc',
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
                    value: 100 - 65,
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

    this.femaleknobOptions = {
      title: {
          text: 35 + '%',
          x: 'center',
          y: 'center',
          textStyle: {
              color: '#e76886',
              fontSize: 14,
              fontWeight: 'bolder'
          }
      },
      tooltip: {
          show: false
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
                          return 100 - 35 + '%'
                      },
                      textStyle: {
                          baseline: 'top'
                      }
                  }
              },
          },
          data: [
              {
                  value: 35,
                  itemStyle: {
                      normal: {
                          color: '#e76886',
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
                  value: 100 - 35,
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

}
