import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeamBoardComponent } from './team-board.component';

describe('TeamBoardComponent', () => {
  let component: TeamBoardComponent;
  let fixture: ComponentFixture<TeamBoardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
