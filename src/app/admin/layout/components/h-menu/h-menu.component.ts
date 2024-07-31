import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ico-h-menu',
  templateUrl: './h-menu.component.html',
  styleUrls: ['./h-menu.component.scss']
})
export class HMenuComponent implements OnInit {

  @Input() currentActiveSubMenu: string = "";
  @Input() currentActiveMenu:string = "dashboard";
  @Input() currentActiveSubOfSub: string = "";

  constructor(private router: Router,private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
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
        this.currentActiveMenu = "";
    }
  }

  changeNavSubTab(tab: string) {
    if (this.currentActiveSubMenu != tab) {
        this.currentActiveSubMenu = tab;
    } else {
        this.currentActiveSubMenu = "";
    }
  }

}
