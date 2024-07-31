import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ico-appliances-widget',
  templateUrl: './appliances-widget.component.html',
  styleUrls: ['./appliances-widget.component.scss'],
})
export class AppliancesWidgetComponent {
  @Input() options: any = {};
  @Output() toggleEvent = new EventEmitter();
  @Output() allOnEvent = new EventEmitter();
  @Output() allOffEvent = new EventEmitter();

  toggleLight(index) {
    this.toggleEvent.emit({ index: index });
  }

  allOn() {
    this.allOnEvent.emit();
  }

  allOff() {
    this.allOffEvent.emit();
  }
}
