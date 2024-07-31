import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutServiceService {
  public leftbarVisible: boolean = true;

  public showLoader: boolean = false;
  public themeClass: string = 'theme-cyan';
  public themeDarkClass: string = '';

  public menuClass: string = '';
  public rtlClass: string = '';
  public isHorizontalMenu: boolean = false;

  public isRightToggle = '';

  public leftBarShow: Subject<boolean> = new Subject<boolean>();
  public rightBarShow: Subject<boolean> = new Subject<boolean>();
  public siteMapShow: Subject<boolean> = new Subject<boolean>();
  public showLoaderSubject: Subject<boolean> = new Subject<boolean>();
  public themeClassChange: Subject<string> = new Subject<string>();
  public menuClassChange: Subject<string> = new Subject<string>();
  public rtlClassChange: Subject<string> = new Subject<string>();
  public themeDarkClassChange: Subject<string> = new Subject<string>();
  public themeHighConChange: Subject<string> = new Subject<string>();
  public themeFontFamilyChange: Subject<string> = new Subject<string>();
  public isHorizontalMenuSubject: Subject<boolean> = new Subject<boolean>();

  public rightBarToggleChange: Subject<string> = new Subject<string>();

  public leftBarToggleChange: Subject<string> = new Subject<string>();
  isLeftToggle: string = 'open';

  constructor() {
    // Left bar subscribers
    this.leftBarShow.subscribe((value) => {
      this.leftbarVisible = value;
    });

    // Show Loader subscribers
    this.showLoaderSubject.subscribe((value) => {
      this.showLoader = value;
    });

    // Left bar subscribers
    this.isHorizontalMenuSubject.subscribe((value) => {
      this.isHorizontalMenu = value;
    });

    // Theme Class subscribers
    this.themeClassChange.subscribe((value) => {
      this.themeClass = value;
    });
    // Menu Class subscribers
    this.menuClassChange.subscribe((value) => {
      this.menuClass = value;
    });
    // RTL Class subscribers
    this.rtlClassChange.subscribe((value) => {
      this.rtlClass = value;
    });
    // Dark Mode
    this.themeDarkClassChange.subscribe((value) => {
      this.themeDarkClass = value;
    });

    this.rightBarToggleChange.subscribe((value) => {
      this.isRightToggle = value;
    });

    this.leftBarToggleChange.subscribe((value) => {
      this.isLeftToggle = value;
    });
  }

  /** Left bar show functions */

  toggleLeftBar() {
    if (this.leftbarVisible) {
      this.leftBarShow.next(false);
    } else {
      this.leftBarShow.next(true);
    }
  }

  showLeftBar() {
    this.leftBarShow.next(true);
  }

  hideLeftBar() {
    this.leftBarShow.next(false);
  }

  getLeftBarStatus() {
    return this.leftbarVisible;
  }

  showRightBar() {
    this.rightBarShow.next(true);
  }

  hideRightBar() {
    this.rightBarShow.next(false);
  }

  showSiteMap() {
    this.siteMapShow.next(true);
  }

  hideSiteMap() {
    this.siteMapShow.next(false);
  }

  loaderShow() {
    this.showLoaderSubject.next(true);
  }

  loaderHide() {
    this.showLoaderSubject.next(false);
  }

  getLoaderStatus() {
    return this.showLoaderSubject;
  }

  /** Theme Class functions */
  themeChange(theme: string) {
    this.themeClassChange.next(theme);
  }

  /** Menu Class functions */
  menuChange(menu: string) {
    this.menuClassChange.next(menu);
  }

  /** Rtl Class functions */
  rtlChange(menu: string) {
    this.rtlClassChange.next(menu);
  }

  /** Dark Class functions */
  themeDarkChange(darkClass: string) {
    this.themeDarkClassChange.next(darkClass);
  }

  themeHightCont(highCont: string) {
    this.themeHighConChange.next(highCont);
  }

  themeFontFamily(font: string) {
    this.themeFontFamilyChange.next(font);
  }

  rightBarMenuHide() {
    if (this.isRightToggle) {
      this.rightBarToggleChange.next('');
    } else {
      this.rightBarToggleChange.next('right_icon_toggle');
    }
  }

  toggleHorizontalMenu() {
    if (this.isHorizontalMenu) {
      this.isHorizontalMenuSubject.next(false);
    } else {
      this.isHorizontalMenuSubject.next(true);
    }
  }

  leftBarToggleMenu() {
    if (this.isLeftToggle == 'open') {
      this.isLeftToggle = 'close';
      this.leftBarToggleChange.next('close');
    } else {
      this.isLeftToggle = 'open';
      this.leftBarToggleChange.next('open');
    }
  }
}
