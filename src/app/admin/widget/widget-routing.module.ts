import { BlogComponent } from './blog/blog.component';
import { ECommerseComponent } from './e-commerse/e-commerse.component';
import { SocialComponent } from './social/social.component';
import { WeatherComponent } from './weather/weather.component';
import { ChartsComponent } from './charts/charts.component';
import { DataComponent } from './data/data.component';
import { WidStatesticsComponent } from './wid-statestics/wid-statestics.component';
import { WidgetComponent } from './widget/widget.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WidgetComponent,
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      {
        path: 'statistics',
        component: WidStatesticsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'data',
        component: DataComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'chart',
        component: ChartsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'weather',
        component: WeatherComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'social',
        component: SocialComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'blog',
        component: BlogComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'ecommerce',
        component: ECommerseComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WidgetRoutingModule {}
