import { EChartOption } from 'echarts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ico-profile-two',
  templateUrl: './profile-two.component.html',
  styleUrls: ['./profile-two.component.scss']
})
export class ProfileTwoComponent implements OnInit {

  activeTb: any = 'overview';
  public MaleknobOptions: EChartOption = {};
  events: any;
  birthday: any;
  conferences: any;
  seminars: any;

  constructor() {

    this.events = this.knobCommonOption(22, '#49C5B6');
    this.birthday = this.knobCommonOption(78, '#2296F3');
    this.conferences = this.knobCommonOption(66, '#F54336');
    this.seminars = this.knobCommonOption(50, '#4CAF50');

  }

  knobCommonOption(val, Color){
    return {
      title: {
          text: val + '%',
          x: 'center',
          y: 'center',
          textStyle: {
              color: Color,
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
                          return 100 - val + '%'
                      },
                      textStyle: {
                          baseline: 'top'
                      }
                  }
              },
          },
          data: [
              {
                  value: val,
                  itemStyle: {
                      normal: {
                          color: Color,
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
                  value: 100 - val,
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
  activeTab(activeTab){
    this.activeTb = activeTab;
  }
}
