import { GaugesComponent } from './components/gauges/gauges.component';
import { C3ChartsComponent } from './components/c3-charts/c3-charts.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ApexComponent } from './components/apex/apex.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      {
        path: 'apex',
        component: ApexComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'c3-charts',
        component: C3ChartsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'gauges',
        component: GaugesComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
