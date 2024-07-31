import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { WidgetComponent } from './widget/widget.component';
import { WidStatesticsComponent } from './wid-statestics/wid-statestics.component';
import { DataComponent } from './data/data.component';
import { ChartsComponent } from './charts/charts.component';
import { WeatherComponent } from './weather/weather.component';
import { SocialComponent } from './social/social.component';
import { BlogComponent } from './blog/blog.component';
import { ECommerseComponent } from './e-commerse/e-commerse.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ProgressBarModule } from 'angular-progress-bar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    WidgetComponent,
    WidStatesticsComponent,
    DataComponent,
    ChartsComponent,
    WeatherComponent,
    SocialComponent,
    BlogComponent,
    ECommerseComponent,
  ],
  imports: [
    CommonModule,
    WidgetRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    CoreModule,
    ProgressBarModule,
    NgApexchartsModule,
    NgbModule,
  ],
})
export class WidgetModule {}
