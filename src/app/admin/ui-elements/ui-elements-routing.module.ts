import { NotificationsComponent } from './components/notifications/notifications.component';
import { IconsComponent } from './components/icons/icons.component';
import { BootstrapUiComponent } from './components/bootstrap-ui/bootstrap-ui.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TypographyComponent } from './components/typography/typography.component';
import { UiElementsComponent } from './components/ui-elements/ui-elements.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorsComponent } from './components/colors/colors.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { MediaObjectComponent } from './components/media-object/media-object.component';
import { ModalsComponent } from './components/modals/modals.component';
import { NestableComponent } from './components/nestable/nestable.component';
import { ProgressBarsComponent } from './components/progress-bars/progress-bars.component';
import { RangeSlidersComponent } from './components/range-sliders/range-sliders.component';
import { TreeviewComponent } from './components/treeview/treeview.component';

const routes: Routes = [
  {
    path: '',
    component: UiElementsComponent,
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      {
        path: 'typography',
        component: TypographyComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'bootstrap',
        component: BootstrapUiComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'icons',
        component: IconsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'dialogs',
        component: DialogsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'list-group',
        component: ListGroupComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'media-object',
        component: MediaObjectComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'modals',
        component: ModalsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'nestable',
        component: NestableComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'progress-bars',
        component: ProgressBarsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'range-slider',
        component: RangeSlidersComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'treeview',
        component: TreeviewComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiElementsRoutingModule {}
