import { CoreModule } from './../../core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadyAppRoutingModule } from './ready-app-routing.module';
import { InboxComponent } from './components/inbox/inbox.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { EmailComposeComponent } from './components/email-compose/email-compose.component';
import { ReadyAppComponent } from './components/ready-app/ready-app.component';
import { MarkdownModule } from 'ngx-markdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [
    ReadyAppComponent,
    InboxComponent,
    CalendarComponent,
    ChatComponent,
    ContactCardComponent,
    ContactListComponent,
    TaskboardComponent,
    EmailComposeComponent,
  ],
  imports: [
    CommonModule,
    ReadyAppRoutingModule,
    CoreModule,
    DragDropModule,
    MarkdownModule.forRoot(),
    NgbModule,
    FullCalendarModule,
  ],
})
export class ReadyAppModule {}
