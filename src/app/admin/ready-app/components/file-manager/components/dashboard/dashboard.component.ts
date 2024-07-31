import { Component } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'ico-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  ngAfterViewInit() {
    var chartareaspline = c3.generate({
      bindto: '#chart-area-spline', // id of chart wrapper
      data: {
        columns: [
          // each columns data
          ['Documents', 0, 22, 10, 27, 17, 39, 20],
          ['Media', 0, 12, 1, 12, 9, 51, 9],
          ['Images', 7, 5, 23, 2, 26, 9, 21],
        ],
        type: 'area-spline', // default type of chart
        colors: {
          Documents: '#90CCF1',
          Media: '#AB7DF6',
          Images: '#84B137',
        },
        names: {
          Documents: 'Documents',
          Media: 'Media',
          Images: 'Images',
        },
      },
      axis: {
        x: {
          type: 'category',
          categories: ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        },
      },
      grid: {
        y: {
          show: true,
        },
      },
      legend: {
        show: false, //hide legend
      },
    });
  }
}
