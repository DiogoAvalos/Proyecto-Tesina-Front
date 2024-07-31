import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-analytical',
  templateUrl: './analytical.component.html',
  styleUrls: ['./analytical.component.scss']
})
export class AnalyticalComponent implements OnInit {

  public detailSparklineOptions:Array<any> = new Array<any>();
  public basicDetailCardOptions:Array<any> = new Array<any>();
  public deviceOption: EChartOption = {};
  public audienceChartOption: EChartOption = {};
  public barChartOptions: EChartOption = {};

  constructor() {

      this.detailSparklineOptions = [
        {
            title:"New Sessions",
            value:"22,500",
            icon:"<i class='fa fa-level-up font-12'></i>",
            text:"Analytics for last week",
            sparklineOption: this.loadLineAreaChartOptions([4,1,5,2,7,3], "#73CEC7", "#39afa6")
        },
        {
            title: "Goal Completions",
            value: "1,12,500",
            icon:"",
            text: "Analytics for last week",
            sparklineOption: this.loadLineAreaChartOptions([1,4,2,3,6,2], "#ffa901", "#efc26b")
        },
        {
            title: "TIME ON SITE",
            value: "1,070",
            icon:"",
            text: "Analytics for last week",
            sparklineOption: this.loadLineAreaChartOptions([1,4,2,3,1,5], "#38c172", "#84d4a6")
        },
        {
            title: "BOUNCE RATE",
            value: "10K",
            icon:"",
            text: "Analytics for last week",
            sparklineOption: this.loadLineAreaChartOptions([1,3,5,1,4,2], "#226fd8", "#7ea7de")
        }
    ];

      this.basicDetailCardOptions =
    [
      {
        title: "Sessions",
        value: "3",
        mainIcon: "fa-flag",
        icon: "fa-level-up",
        per: " 13%",
        text: "Analytics for last week"
      },
      {
        title: "Users",
        value: "25K",
        mainIcon: "fa-users",
        icon: "fa-level-down",
        per: " 7%",
        text: "Analytics for last week"
      },
      {
        title: "VISITORS",
        value: "21K",
        mainIcon: "fa-user",
        icon: "fa-level-down",
        per: " 4%",
        text: "Analytics for last week"
      },
      {
        title: "LIKES",
        value: "53K",
        mainIcon: "fa-thumbs-up",
        icon: "fa-level-up",
        per: " 15%",
        text: "Analytics for last week"
      },
    ]

      this.deviceOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            bottom: '0',
            data: ['Desktop', 'Mobile', 'Tablet']
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
                      name: 'Desktop',
                      itemStyle: {
                        color: 'rgb(89, 196, 188)'
                      }
                    },
                    {
                      value: 335,
                      name: 'Mobile',
                      itemStyle: {
                        color: 'rgb(99, 122, 174)'
                      }
                    },
                    {
                      value: 234,
                      name: 'Tablet',
                      itemStyle: {
                        color: 'rgb(47, 170, 161)'
                      }
                    },
                ]
            }
        ]
    };

    this.audienceChartOption = {
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
          bottom: '0',
          data: ['Male', 'Female', 'Other']
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
                    name: 'Male',
                    itemStyle: {
                      color: 'rgb(121, 84, 173)'
                    }
                  },
                  {
                    value: 450,
                    name: 'Female',
                    itemStyle: {
                      color: 'rgb(231, 104, 134)'
                    }
                  },
                  {
                    value: 200,
                    name: 'Other',
                    itemStyle: {
                        color: 'rgb(120, 47, 223)'
                    }
                  },
              ]
          }
      ]
    };

  this.barChartOptions = {
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
          left: '0%',
          right: '2%',
          bottom: '0%',
          containLabel: true
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        xAxis: [
            {
                type: 'category',
                show: true,
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
            }
        ],
        yAxis: [
            {
                show: false,
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Forest',
                type: 'bar',
                barGap: 0,
                data: [11, 8, 22, 18, 19, 12, 17, 22, 18, 32, 9, 17],
                itemStyle: {
                    color: '#59C4BC'
                },
                barWidth: 20,
            },
            {
                name: 'Steppe',
                type: 'bar',
                data: [7, 7, 5, 7, 9, 6, 8, 11, 17, 19, 6, 12],
                itemStyle: {
                    color: '#637AAE'
                },
                barWidth: 20,
            },
        ]
    };

  }

  ngOnInit(): void {
  }

  openDropdown(){

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
