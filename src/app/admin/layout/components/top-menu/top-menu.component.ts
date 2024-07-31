import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, NgZone, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutServiceService } from 'src/app/services/layout-service.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss'],
})
export class TopMenuComponent implements OnInit {
  innerWidth: number;
  private ngUnsubscribe = new Subject();
  isShowLeftBar: string;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 1280) {
      this.document.body.classList.add('layout-fullwidth');
      this.document.body.classList.add('sidebar_toggle');
    } else {
      this.document.body.classList.remove('layout-fullwidth');
      this.document.body.classList.remove('sidebar_toggle');
    }

    if (event.target.innerWidth < 992) {
      this.document.body.classList.add('right_icon_toggle');
    } else {
      this.document.body.classList.remove('right_icon_toggle');
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private ngZone: NgZone,
    private layoutServiceService: LayoutServiceService
  ) {
    this.layoutServiceService.leftBarToggleChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((isLeftBar) => {
        this.isShowLeftBar = isLeftBar;
      });

    this.ngZone.run(() => {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth < 1280) {
        if (this.document.body.classList.contains('layout-fullwidth')) {
          this.document.body.classList.remove('layout-fullwidth');
        } else {
          this.document.body.classList.add('layout-fullwidth');
        }
      }
    });
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.layoutServiceService.loaderShow();
    let that = this;

    this.layoutServiceService.toggleLeftBar();

    setTimeout(() => {
      that.layoutServiceService.loaderHide();
    }, 500);
  }

  fullWidthToggle() {
    // if(this.document.body.classList.contains('layout-fullwidth')){
    //   this.document.body.classList.remove('layout-fullwidth');
    // }else{
    //   this.document.body.classList.add('layout-fullwidth');
    // }

    if (this.document.body.classList.contains('layout-fullwidth')) {
      if (this.innerWidth < 1280) {
        if (this.document.body.classList.contains('offcanvas-active')) {
          this.document.body.classList.remove('offcanvas-active');
          this.layoutServiceService.leftBarToggleMenu();
        } else {
          this.document.body.classList.add('offcanvas-active');
          this.layoutServiceService.leftBarToggleMenu();
        }
      } else {
        this.document.body.classList.remove('layout-fullwidth');
      }
    } else {
      this.document.body.classList.add('layout-fullwidth');
    }
  }
}
