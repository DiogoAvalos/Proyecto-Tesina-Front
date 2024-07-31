import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { YandexMapComponent } from './components/yandex-map/yandex-map.component';
import { MapComponent } from './components/map/map.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [YandexMapComponent, MapComponent],
  imports: [
    CoreModule,
    CommonModule,
    MapsRoutingModule,
    AngularYandexMapsModule,
  ],
})
export class MapModule {}
