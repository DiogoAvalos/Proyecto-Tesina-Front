import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnalyticalComponent } from './analytical/analytical.component';
import { IotDashboardComponent } from './iot-dashboard/iot-dashboard.component';
import { DemographicComponent } from './demographic/demographic.component';
import { ProjectBoardComponent } from './project-board/project-board.component';
import { CryptoDashboardComponent } from './crypto-dashboard/crypto-dashboard.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'analytical', pathMatch: 'full' },
      {
        path: 'analytical',
        component: AnalyticalComponent,
        data: { title: ':: Iconic Angular :: Dashboard ::' },
      },
      {
        path: 'iot-dashboard',
        component: IotDashboardComponent,
        data: { title: ':: Iconic Angular :: Dashboard ::' },
      },
      {
        path: 'demographic',
        component: DemographicComponent,
        data: { title: ':: Iconic Angular :: Dashboard ::' },
      },
      {
        path: 'project-board',
        component: ProjectBoardComponent,
        data: { title: ':: Iconic Angular :: Dashboard ::' },
      },
      {
        path: 'crypto-dashboard',
        component: CryptoDashboardComponent,
        data: { title: ':: Iconic Angular :: Dashboard ::' },
      },
      {
        path: 'ecommerce',
        component: EcommerceComponent,
        data: { title: ':: Iconic Angular :: Dashboard ::' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
