import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { filter, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('modalContent') modalContent!: ElementRef;
  @Input() titulo: string;
  @Input() style: any;
  @Input() scroll: boolean = false;
  @Input() modalAutomatico: Observable<boolean>;
  @Output() statusModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  private isShowModal: boolean = false;

  get isModal(): boolean {
    return this.isShowModal;
  }

  set isModal(status: boolean) {
    this.isShowModal = status;
  }

  ngOnInit(): void {
    this.modalAutomatico
      ?.pipe(
        filter((isModal) => isModal),
        tap((modal: Boolean) => modal && this.showModal())
      )
      .subscribe();
  }

  public showModal(): void {
    this.isModal = true;
  }

  public hiddenModal(): void {
    this.isModal = false;
    this.statusModal.emit(this.isModal);
  }

  click_fuera(event) {
    if (event == this.modalContent.nativeElement) this.hiddenModal()
  }
}
