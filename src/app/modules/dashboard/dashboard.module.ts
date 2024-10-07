import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MatModule } from 'src/app/appModules/mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnalyticsComponent, 
    ECommerceComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
