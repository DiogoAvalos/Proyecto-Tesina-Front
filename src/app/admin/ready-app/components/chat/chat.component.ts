import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ico-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public chatOptions: any = {};
  constructor() {
    this.chatOptions = {
      messages: [
        {
          type: 'sent',
          senderProfileImage: 'assets/images/xs/avatar2.jpg',
          time: '10:10 AM, Today',
          message: 'Hi Aiden, how are you? How is the project coming along?',
        },
        {
          type: 'received',
          time: '10:12 AM, Today',
          message: 'Are we meeting today?',
        },
        {
          type: 'received',
          time: '10:15 AM, Today',
          message:
            'Project has been already finished and I have results to show you.',
        },
      ],
    };
  }

  sendMessage($event) {
    let message: any = {};
    message.type = 'sent';
    message.senderProfileImage = 'assets/images/xs/avatar2.jpg';
    message.time = '11:50';
    message.message = $event.message;
    console.log(message);
    this.chatOptions.messages.push(message);
  }

  ngOnInit(): void {}
}
