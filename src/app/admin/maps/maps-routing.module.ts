import { YandexMapComponent } from './components/yandex-map/yandex-map.component';
import { MapComponent } from './components/map/map.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      {
        path: 'yandex-maps',
        component: YandexMapComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
