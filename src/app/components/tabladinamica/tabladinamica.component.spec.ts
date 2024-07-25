/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabladinamicaComponent } from './tabladinamica.component';

describe('TabladinamicaComponent', () => {
  let component: TabladinamicaComponent;
  let fixture: ComponentFixture<TabladinamicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabladinamicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabladinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
