import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ico-yandex-map',
  templateUrl: './yandex-map.component.html',
  styleUrls: ['./yandex-map.component.scss'],
})
export class YandexMapComponent implements OnInit {
  public points = [53.902496, 27.561481];

  public feature = {
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [55.75, 37.8],
          [55.8, 37.9],
          [55.75, 38.0],
          [55.7, 38.0],
          [55.7, 37.8],
        ],
      ],
      fillRule: 'nonZero',
    },
    properties: {
      balloonContent: 'Baloon Content',
    },
  };

  public options = {
    fillColor: '#B5E1FD',
    strokeColor: '#87CFFF',
    opacity: 0.5,
    strokeWidth: 5,
    strokeStyle: 'shortdash',
  };

  constructor() {}

  ngOnInit(): void {}

  onLoad(event) {
    console.log(event);
  }
}
