import { MorrisJsModule } from 'angular-morris-js';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './components/charts/charts.component';
import { ApexComponent } from './components/apex/apex.component';
import { C3ChartsComponent } from './components/c3-charts/c3-charts.component';
import { GaugesComponent } from './components/gauges/gauges.component';
import { CoreModule } from './../../core/core.module';
import { GaugeChartModule } from 'angular-gauge-chart';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    ChartsComponent,
    ApexComponent,
    C3ChartsComponent,
    GaugesComponent,
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgApexchartsModule,
    CoreModule,
    GaugeChartModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    MorrisJsModule,
  ],
})
export class ChartsModule {}
