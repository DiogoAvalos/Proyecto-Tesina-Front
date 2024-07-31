import { Component, Input } from '@angular/core';

@Component({
  selector: 'ico-currency-coin-tile',
  templateUrl: './currency-coin-tile.component.html',
  styleUrls: ['./currency-coin-tile.component.scss'],
})
export class CurrencyCoinTileComponent {
  @Input() icon: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
}
