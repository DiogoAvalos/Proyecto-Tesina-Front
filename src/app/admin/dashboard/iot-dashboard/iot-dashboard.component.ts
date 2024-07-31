import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';


@Component({
  selector: 'ico-iot-dashboard',
  templateUrl: './iot-dashboard.component.html',
  styleUrls: ['./iot-dashboard.component.scss']
})
export class IotDashboardComponent implements OnInit {

  public detailSparklineOptions:Array<any> = new Array<any>();
  public energyUse: EChartOption = {};
  public light: EChartOption = {};
  public dailyAvgTemp: EChartOption = {};
  public spendingOption: EChartOption = {};
  public DayNightDonutOption: EChartOption = {};
  public IndoorLightOptions:any = {};

  constructor() {
    this.energyUse = this.loadLineAreaChartOptions([4,1,5,2,7,3,4], "#39afa6", "#73cec7");
    this.light = this.loadLineAreaChartOptions([1,4,2,3,6,2], "#ffa901", "#efc26b");
    this.dailyAvgTemp = this.loadLineAreaChartOptions([1,4,2,3,1,5], "#38c172", "#84d4a6");


    this.spendingOption = {
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
          bottom: '12%',
          containLabel: true
        },
        legend: {
            bottom: '0',
            data: ['Electricity', 'Water', 'Gas']
        },
        xAxis: [
            {
                type: 'category',
                data: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
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
                name: 'Electricity',
                type: 'bar',
                barGap: 0,
                data: [11, 8, 22, 18, 19, 12, 17, 22, 18, 25, 9, 17],
                barWidth: 5,
                itemStyle: {
                  color: '#59C4BC'
                },
            },
            {
                name: 'Water',
                type: 'bar',
                data: [7, 7, 5, 7, 6, 10, 13, 11, 17, 19, 6, 12],
                barWidth: 5,
                itemStyle: {
                  color: '#2FAAA1'
                },
            },
            {
                name: 'Gas',
                type: 'bar',
                data: [7, 10, 3, 10, 9, 6, 8, 6, 10, 9, 6, 10],
                barWidth: 5,
                itemStyle: {
                  color: '#1F77B4'
                },
            }
        ]
    };

    this.DayNightDonutOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            bottom: '0',
            data: ['Night', 'Day']
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
                      name: 'Night',
                      itemStyle: {
                        color: 'rgb(89, 196, 188)'
                      }
                    },
                    {
                      value: 335,
                      name: 'Day',
                      itemStyle: {
                        color: 'rgb(99, 122, 174)'
                      }
                    }
                ]
            }
        ]
    };

    this.IndoorLightOptions.title = "Lights Indoor";
    this.IndoorLightOptions.appliances = [
        {
            title:"Kitchen",
            status:false
        },
        {
            title: "Dining Room",
            status: true
        },
        {
            title: "Living Room",
            status: true
        },
        {
            title: "Bed Room",
            status: false,
            error:true,
            errorMessage:"Not Connected"
        },
        {
            title: "Bath Room",
            status: true
        },
        {
            title: "Store Room",
            status: false
        }
    ];


  }

  toggleIndoorLight($event){
      this.IndoorLightOptions.appliances[$event.index].status = !this.IndoorLightOptions.appliances[$event.index].status;
  }

  allIndoorLightsOn(){
      if (this.IndoorLightOptions.appliances){
          this.IndoorLightOptions.appliances.forEach((item,index)=>{
              this.IndoorLightOptions.appliances[index].status = true;

          });
      }
  }

  allIndoorLightsOff() {
      if (this.IndoorLightOptions.appliances) {
          this.IndoorLightOptions.appliances.forEach((item,index) => {
              this.IndoorLightOptions.appliances[index].status = false;
          });
      }
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

  ngOnInit(): void {
  }

}
