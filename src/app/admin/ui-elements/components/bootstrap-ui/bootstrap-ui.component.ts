import { Component, ViewChild } from "@angular/core";
import { NgbAccordion, NgbModal, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ico-bootstrap-ui',
  templateUrl: './bootstrap-ui.component.html',
  styleUrls: ['./bootstrap-ui.component.scss']
})
export class BootstrapUiComponent {
  @ViewChild('acc') accordionComponent: NgbAccordion;

  @ViewChild('accordion_one') accordion_one: NgbAccordion;
  @ViewChild('accordion_two') accordion_two: NgbAccordion;

  constructor(private modalService: NgbModal, config: NgbTooltipConfig) {
  }

  // Method call on click.
  toggle(id:string): void {
    this.accordionComponent.toggle(id);
  }

  toggleBoth(id:string): void {
    if(id === "toggle_1"){
      this.accordion_one.toggle(id);
    }
    if(id === "toggle_2"){
      this.accordion_two.toggle(id);
    }
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }


}
