import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AnalyticalComponent } from './analytical/analytical.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { IotDashboardComponent } from './iot-dashboard/iot-dashboard.component';
import { DemographicComponent } from './demographic/demographic.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { CryptoDashboardComponent } from './crypto-dashboard/crypto-dashboard.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NestableModule } from 'ngx-nestable';

@NgModule({
  declarations: [
    AnalyticalComponent,
    DashboardComponent,
    IotDashboardComponent,
    DemographicComponent,
    ProjectBoardComponent,
    CryptoDashboardComponent,
    EcommerceComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    CoreModule,
    NgbModule,
    NgApexchartsModule,
    NestableModule,
  ],
})
export class DashboardModule {}
