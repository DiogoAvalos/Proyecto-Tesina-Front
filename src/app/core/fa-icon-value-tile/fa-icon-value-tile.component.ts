import { Component, Input } from '@angular/core';

@Component({
  selector: 'ico-fa-icon-value-tile',
  templateUrl: './fa-icon-value-tile.component.html',
  styleUrls: ['./fa-icon-value-tile.component.scss'],
})
export class FaIconValueTileComponent {
  @Input() class: string = '';
  @Input() icon: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
}
