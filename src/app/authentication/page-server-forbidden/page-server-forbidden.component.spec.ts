import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageServerForbiddenComponent } from './page-server-forbidden.component';

describe('PageServerForbiddenComponent', () => {
  let component: PageServerForbiddenComponent;
  let fixture: ComponentFixture<PageServerForbiddenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageServerForbiddenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageServerForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
