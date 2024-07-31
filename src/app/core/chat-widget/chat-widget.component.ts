import {
  Component,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'ico-chat-widget',
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.scss'],
})
export class ChatWidgetComponent {
  @Input() options: any = {};
  @Output() onSendEvent = new EventEmitter();
  @ViewChild('chatBox', { static: false })
  private myScrollContainer: ElementRef;

  public newMessage: string = '';

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  onSend() {
    let event: any = {
      type: 'sent',
      senderProfileImage: 'assets/images/xs/avatar2.jpg',
      time: 'Just now',
      message: this.newMessage,
    };
    this.onSendEvent.emit(event);
    this.newMessage = '';
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
