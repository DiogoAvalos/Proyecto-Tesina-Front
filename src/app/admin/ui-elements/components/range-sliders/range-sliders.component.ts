import { Component, OnInit } from '@angular/core';
import 'round-slider';
import * as $ from 'jquery';

@Component({
  selector: 'ico-range-sliders',
  templateUrl: './range-sliders.component.html',
  styleUrls: ['./range-sliders.component.scss'],
})
export class RangeSlidersComponent implements OnInit {
  withoutPrm = 10;
  minMaxPoint = 550;
  startEnd = [148, 800];

  someRange2config: any = {
    behaviour: 'drag',
    connect: true,
    tooltips: [true, true],
    keyboard: true,
    step: 1,
    pageSteps: 10,
    range: {
      min: 0,
      max: 1000,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 5,
      stepped: true,
    },
  };

  nagativeConfig: any = {
    start: [-500, 500],
    behaviour: 'drag',
    connect: true,
    tooltips: [true, true],
    keyboard: true,
    step: 1,
    pageSteps: 10,
    range: {
      min: -1000,
      max: 1000,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 5,
      stepped: true,
    },
  };

  bigSteps: any = {
    start: [-500, 500],
    behaviour: 'drag',
    connect: true,
    tooltips: [true, true],
    keyboard: true,
    step: 250,
    pageSteps: 10,
    range: {
      min: -1000,
      max: 1000,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 5,
      stepped: true,
    },
  };

  floatSteps: any = {
    start: [-9.6, 3.2],
    behaviour: 'drag',
    connect: true,
    tooltips: [true, true],
    keyboard: true,
    step: 0.1,
    pageSteps: 10,
    range: {
      min: -12.8,
      max: 12.8,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 5,
      stepped: true,
    },
  };

  customNumber: any = {
    start: [50000, 100000],
    behaviour: 'drag',
    connect: true,
    tooltips: [true, true],
    keyboard: true,
    step: 0.1,
    pageSteps: 10,
    range: {
      min: 0,
      max: 1000000,
    },
    pips: {
      mode: 'count',
      density: 2,
      values: 7,
      stepped: true,
    },
  };

  ngOnInit(): void {
    (<any>$('#slider')).roundSlider({
      radius: 85,
      sliderType: 'default',
      value: 40,
    });

    (<any>$('#min_range')).roundSlider({
      radius: 85,
      sliderType: 'min-range',
      value: 48,
    });

    (<any>$('#r_range')).roundSlider({
      radius: 85,
      sliderType: 'range',
      value: '10,49',
    });

    (<any>$('#startAngle')).roundSlider({
      startAngle: 90,
      endAngle: '+225',
      value: 45,
    });

    (<any>$('#appearance1')).roundSlider({
      radius: 80,
      width: 14,
      handleSize: '24,12',
      handleShape: 'square',
      sliderType: 'min-range',
      value: 40,
    });

    (<any>$('#appearance2')).roundSlider({
      radius: 80,
      width: 14,
      handleSize: '+8',
      handleShape: 'dot',
      sliderType: 'min-range',
      value: 80,
    });

    (<any>$('#appearance3')).roundSlider({
      radius: 80,
      width: 8,
      handleSize: '+16',
      handleShape: 'dot',
      sliderType: 'min-range',
      value: 47,
    });

    (<any>$('#appearance4')).roundSlider({
      radius: 80,
      width: 9,
      handleSize: '+8',
      sliderType: 'min-range',
      value: 40,
    });
  }
}
