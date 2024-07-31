import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrencyCoinTileComponent } from './currency-coin-tile.component';

describe('CurrencyCoinTileComponent', () => {
  let component: CurrencyCoinTileComponent;
  let fixture: ComponentFixture<CurrencyCoinTileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyCoinTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCoinTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
