import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImageGalleryTwoComponent } from './image-gallery-two.component';

describe('ImageGalleryTwoComponent', () => {
  let component: ImageGalleryTwoComponent;
  let fixture: ComponentFixture<ImageGalleryTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageGalleryTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
