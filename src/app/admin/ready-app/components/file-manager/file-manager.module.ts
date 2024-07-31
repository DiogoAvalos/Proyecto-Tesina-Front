import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { MediaComponent } from './components/media/media.component';
import { ImagesComponent } from './components/images/images.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    FileManagerComponent,
    DashboardComponent,
    DocumentsComponent,
    MediaComponent,
    ImagesComponent,
  ],
  imports: [CommonModule, FileManagerRoutingModule, NgbModule],
})
export class FileManagerModule {}
