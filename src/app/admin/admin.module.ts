import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './layout/components/admin/admin.component';
import { LeftbarComponent } from './layout/components/leftbar/leftbar.component';
import { RightbarComponent } from './layout/components/rightbar/rightbar.component';
import { TopMenuComponent } from './layout/components/top-menu/top-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { NestableModule } from 'ngx-nestable';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MarkdownModule } from 'ngx-markdown';
import { HMenuComponent } from './layout/components/h-menu/h-menu.component';

@NgModule({
  declarations: [
    AdminComponent,
    LeftbarComponent,
    RightbarComponent,
    TopMenuComponent,
    HMenuComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    NestableModule,
    DragDropModule,
    MarkdownModule.forRoot(),
  ],
})
export class AdminModule {}
