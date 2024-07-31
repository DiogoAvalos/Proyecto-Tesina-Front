import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutServiceService } from 'src/app/services/layout-service.service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.scss'],
})
export class RightbarComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  isRightToggle: string;

  constructor(private layoutServiceService: LayoutServiceService) {
    this.layoutServiceService.rightBarToggleChange
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((rightToggle) => {
        this.isRightToggle = rightToggle;
      });
  }

  ngOnInit(): void {}

  rightToggle() {
    this.layoutServiceService.rightBarMenuHide();
  }
}
