import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { LayoutServiceService } from '../../../../../app/services/layout-service.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.scss'],
})
export class LeftbarComponent implements OnInit, OnDestroy {
  @Input() currentActiveMenu: string = 'dashboard';
  @Input() currentActiveSubMenu: string = '';
  @Input() currentActiveSubOfSub: string = '';
  public currentActiveNav: string = '';
  public isRtl: boolean = false;
  public menuClass: string = '';
  public rtlClass: string = '';
  private ngUnsubscribe = new Subject();
  hmenu: boolean = false;
  public themeClass: string = 'theme-cyan';
  public themeDarkClass: string = 'light';
  public themeHighContClass: string = '';
  public themeFontClass: string = 'font-nunito';
  public isHorizontalMenu: boolean = false;
  isShowLeftBar: string;

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
          this.getActiveRoutes();
        }
      });

    this.layoutServiceService.isHorizontalMenuSubject
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((isHorizontalMenu) => {
        this.isHorizontalMenu = isHorizontalMenu;
      });

    this.layoutServiceService.leftBarToggleChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((isLeftBar) => {
        this.isShowLeftBar = isLeftBar;
      });

    this.layoutServiceService.menuClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((menuClass) => {
        this.menuClass = menuClass;
      });

    this.layoutServiceService.rtlClassChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((rtlClass) => {
        this.rtlClass = rtlClass;
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
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleLeftBar() {
    this.layoutServiceService.leftBarToggleMenu();
  }

  getActiveRoutes() {
    let segments: Array<string> = this.router.url.split('/');
    this.currentActiveMenu = segments[1];
    this.currentActiveSubMenu = segments[2];
    this.currentActiveSubOfSub = segments[3];
    this.cdr.detectChanges();
  }

  changeNavTab(tab: string) {
    if (this.currentActiveMenu != tab) {
      this.currentActiveMenu = tab;
    } else {
      this.currentActiveMenu = '';
    }
  }

  changeNavSubTab(tab: string) {
    if (this.currentActiveSubMenu != tab) {
      this.currentActiveSubMenu = tab;
    } else {
      this.currentActiveSubMenu = '';
    }
  }

  toggleRtlLayout() {
    this.layoutServiceService.loaderShow();
    let that = this;
    if (this.isRtl) {
      this.isRtl = false;
      this.layoutServiceService.rtlChange('');
    } else {
      this.isRtl = true;
      this.layoutServiceService.rtlChange('rtl');
    }
    setTimeout(() => {
      that.layoutServiceService.loaderHide();
    }, 500);
  }

  toggleMenu() {
    this.layoutServiceService.loaderShow();
    let that = this;

    this.layoutServiceService.toggleLeftBar();

    setTimeout(() => {
      that.layoutServiceService.loaderHide();
    }, 500);
  }

  toggleHMenu() {}

  topMenuToggle() {
    this.layoutServiceService.loaderShow();
    let that = this;
    if (this.menuClass == 'index2') {
      this.layoutServiceService.menuChange('');
    } else {
      this.layoutServiceService.menuChange('index2');
    }
    setTimeout(() => {
      that.layoutServiceService.loaderHide();
    }, 500);
  }

  changeTheme(theme: string) {
    this.layoutServiceService.themeChange(theme);
  }

  changeDarkClass(event) {
    if (event.target.checked) {
      this.layoutServiceService.themeDarkChange('dark');
      this.layoutServiceService.themeHightCont('');
    } else {
      this.layoutServiceService.themeDarkChange('light');
    }
  }

  changeRtlClass(event) {
    if (event.target.checked) {
      this.isRtl = true;
      this.layoutServiceService.rtlChange('rtl_mode');
    } else {
      this.isRtl = false;
      this.layoutServiceService.rtlChange('');
    }
  }

  changeHighContClass(event) {
    if (event.target.checked) {
      this.layoutServiceService.themeDarkChange('');
      this.layoutServiceService.themeHightCont('high-contrast');
    } else {
      this.layoutServiceService.themeHightCont('');
    }
  }

  onItemChange(value) {
    this.layoutServiceService.themeFontFamily(value);
  }

  toggleHorizontalMenu() {
    this.layoutServiceService.toggleHorizontalMenu();
  }
}
