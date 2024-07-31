import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ico-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  constructor(private toastr: ToastrService) {
    this.toastr.info('Hi there, this is notification demo.', undefined, {
      closeButton: true,
      positionClass: 'toast-bottom-right',
    });
  }

  showInfo() {
    this.toastr.info('This is general theme info', undefined, {
      closeButton: true,
      positionClass: 'toast-bottom-right',
    });
  }

  showSuccess() {
    this.toastr.success('This is success info', undefined, {
      closeButton: true,
      positionClass: 'toast-bottom-right',
    });
  }

  showWarning() {
    this.toastr.warning('This is warning info', undefined, {
      closeButton: true,
      positionClass: 'toast-bottom-right',
    });
  }

  showError() {
    this.toastr.error('This is error info', undefined, {
      closeButton: true,
      positionClass: 'toast-bottom-right',
    });
  }

  showBottomRight() {
    this.toastr.info("Hi, I'm here", undefined, {
      closeButton: true,
      positionClass: 'toast-bottom-right',
    });
  }

  showBottomLeft() {
    this.toastr.info("Hi, I'm here", undefined, {
      closeButton: true,
      positionClass: 'toast-bottom-left',
    });
  }

  showTopLeft() {
    this.toastr.info("Hi, I'm here", undefined, {
      closeButton: true,
      positionClass: 'toast-top-left',
    });
  }

  showTopRight() {
    this.toastr.info("Hi, I'm here", undefined, {
      closeButton: true,
      positionClass: 'toast-top-right',
    });
  }

  showTopFull() {
    this.toastr.info("Hi, I'm here", undefined, {
      closeButton: true,
      positionClass: 'toast-top-full-width',
    });
  }

  showBottomFull() {
    this.toastr.info("Hi, I'm here", undefined, {
      closeButton: true,
      positionClass: 'toast-bottom-full-width',
    });
  }

  showTopCenter() {
    this.toastr.info("Hi, I'm here", undefined, {
      closeButton: true,
      positionClass: 'toast-top-center',
    });
  }

  showBottomCenter() {
    this.toastr.info("Hi, I'm here", undefined, {
      closeButton: true,
      positionClass: 'toast-bottom-center',
    });
  }

  colorNotification(color) {
    this.toastr.info("Hi, I'm here", undefined, {
      closeButton: true,
      positionClass: 'toast-top-left',
      toastClass: 'ngx-toastr ' + color,
    });
  }
}
