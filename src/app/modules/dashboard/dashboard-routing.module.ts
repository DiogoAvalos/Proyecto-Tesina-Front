import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'e-commerce', component: ECommerceComponent, title: 'Dashboard' },
      { path: 'analytics', component: AnalyticsComponent, title: 'Analytics' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
