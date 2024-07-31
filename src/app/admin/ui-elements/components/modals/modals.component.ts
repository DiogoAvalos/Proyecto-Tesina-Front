import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ico-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
})
export class ModalsComponent {
  constructor(private modalService: NgbModal) {}
  openModal(content, size) {
    this.modalService.open(content, { size: size });
  }
}
