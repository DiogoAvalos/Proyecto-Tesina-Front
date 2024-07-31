import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiElementsRoutingModule } from './ui-elements-routing.module';
import { UiElementsComponent } from './components/ui-elements/ui-elements.component';
import { TypographyComponent } from './components/typography/typography.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BootstrapUiComponent } from './components/bootstrap-ui/bootstrap-ui.component';
import { IconsComponent } from './components/icons/icons.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ColorsComponent } from './components/colors/colors.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { MediaObjectComponent } from './components/media-object/media-object.component';
import { ModalsComponent } from './components/modals/modals.component';
import { NestableComponent } from './components/nestable/nestable.component';
import { ProgressBarsComponent } from './components/progress-bars/progress-bars.component';
import { RangeSlidersComponent } from './components/range-sliders/range-sliders.component';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { TreeviewModule } from 'ngx-treeview';
import { TreeviewMakerService } from '../../services/treeview-maker.service';
import { TreeModule } from '@circlon/angular-tree-component';
import { NestableModule } from 'ngx-nestable';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  declarations: [
    UiElementsComponent,
    TypographyComponent,
    TabsComponent,
    ButtonsComponent,
    BootstrapUiComponent,
    IconsComponent,
    NotificationsComponent,
    ColorsComponent,
    DialogsComponent,
    ListGroupComponent,
    MediaObjectComponent,
    ModalsComponent,
    NestableComponent,
    ProgressBarsComponent,
    RangeSlidersComponent,
    TreeviewComponent,
  ],
  imports: [
    CommonModule,
    UiElementsRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
    DragDropModule,
    FormsModule,
    TreeviewModule.forRoot(),
    TreeModule,
    NestableModule,
    NouisliderModule,
  ],
  providers: [TreeviewMakerService],
})
export class UiElementsModule {}
