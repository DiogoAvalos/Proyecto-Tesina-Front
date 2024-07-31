import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { LayoutServiceService } from 'src/app/services/layout-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public title = 'iconic';
  public isStopLoading: boolean = true;
  public showNotifMenu: boolean = false;
  public showToggleMenu: boolean = false;
  public navTab: string = 'menu';
  public currentActiveMenu = 'light';
  public currentActiveSubMenu;
  public currentActiveSubOfSub;
  public themeClass: string = 'theme-cyan';
  public themeDarkClass: string = 'light';
  public themeHighContClass: string = '';
  public smallScreenMenu = '';
  public darkClass: string = '';
  private ngUnsubscribe = new Subject();
  public rtlClass: string = '';
  public themeFontClass: string = 'font-nunito';
  public isHorizontalMenu: boolean = false;
  isRightToggle: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private layoutServiceService: LayoutServiceService
  ) {
    this.router.events
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isStopLoading = false;
          this.getActiveRoutes();
        }
      });

    this.layoutServiceService.isHorizontalMenuSubject
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((isHorizontalMenu) => {
        this.isHorizontalMenu = isHorizontalMenu;
        if (isHorizontalMenu) {
          this.document.body.classList.add('h_menu');
        } else {
          this.document.body.classList.remove('h_menu');
        }
        this.cdr.detectChanges();
      });

    this.layoutServiceService.themeClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((themeClass) => {
        this.themeClass = themeClass;
      });

    this.layoutServiceService.themeDarkClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((themeDarkClass) => {
        this.themeDarkClass = themeDarkClass;
      });

    this.layoutServiceService.rtlClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((rtlClass) => {
        this.rtlClass = rtlClass;
      });

    this.layoutServiceService.themeHighConChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((highContClass) => {
        this.themeHighContClass = highContClass;
      });

    this.layoutServiceService.themeFontFamilyChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((fontClass) => {
        this.themeFontClass = fontClass;
      });

    this.layoutServiceService.rightBarToggleChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((rightToggle) => {
        if (rightToggle === 'right_icon_toggle') {
          this.document.body.classList.add('right_icon_toggle');
        } else {
          this.document.body.classList.remove('right_icon_toggle');
        }
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  getActiveRoutes() {
    let segments: Array<string> = this.router.url.split('/');
    this.currentActiveMenu = segments[1];
    this.currentActiveSubMenu = segments[2];
    this.currentActiveSubOfSub = segments[3];
  }
}
