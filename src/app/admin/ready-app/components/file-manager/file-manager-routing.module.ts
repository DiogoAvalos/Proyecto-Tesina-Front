import { ImagesComponent } from './components/images/images.component';
import { MediaComponent } from './components/media/media.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FileManagerComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'documents',
        component: DocumentsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'media',
        component: MediaComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'images',
        component: ImagesComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileManagerRoutingModule {}
