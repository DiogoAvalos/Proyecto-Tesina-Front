import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageForbiddenComponent } from './page-forbidden.component';

describe('PageForbiddenComponent', () => {
  let component: PageForbiddenComponent;
  let fixture: ComponentFixture<PageForbiddenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageForbiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
