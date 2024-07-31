import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ico-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent {
  constructor(private _location: Location) {}

  backClicked() {
    this._location.back();
  }
}
