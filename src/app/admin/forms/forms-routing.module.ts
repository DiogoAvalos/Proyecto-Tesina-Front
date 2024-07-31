import { MarkdownComponent } from './components/markdown/markdown.component';
import { CkEditorComponent } from './components/ck-editor/ck-editor.component';
import { SummernoteComponent } from './components/summernote/summernote.component';
import { ImageCroppingComponent } from './components/image-cropping/image-cropping.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { FormWizardComponent } from './components/form-wizard/form-wizard.component';
import { BasicElementsComponent } from './components/basic-elements/basic-elements.component';
import { AdvancedElementsComponent } from './components/advanced-elements/advanced-elements.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { FormsComponent } from './components/forms/forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      {
        path: 'form-validation',
        component: FormValidationComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'advanced-elements',
        component: AdvancedElementsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'basic-elements',
        component: BasicElementsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'form-wizard',
        component: FormWizardComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'drag-drop',
        component: DragDropComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'image-cropping',
        component: ImageCroppingComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'summernote',
        component: SummernoteComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'ck-editor',
        component: CkEditorComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'markdown',
        component: MarkdownComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
