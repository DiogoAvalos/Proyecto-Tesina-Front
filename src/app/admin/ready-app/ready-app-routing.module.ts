import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { EmailComposeComponent } from './components/email-compose/email-compose.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { ReadyAppComponent } from './components/ready-app/ready-app.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';

const routes: Routes = [
  {
    path: '',
    component: ReadyAppComponent,
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      {
        path: 'inbox',
        component: InboxComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'compose',
        component: EmailComposeComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'chat',
        component: ChatComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'calendar',
        component: CalendarComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'contact-list',
        component: ContactListComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'contact-card',
        component: ContactCardComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'taskboard',
        component: TaskboardComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./components/blog/blog.module').then((m) => m.BlogModule),
      },
      {
        path: 'file-manager',
        loadChildren: () =>
          import('./components/file-manager/file-manager.module').then(
            (m) => m.FileManagerModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadyAppRoutingModule {}
