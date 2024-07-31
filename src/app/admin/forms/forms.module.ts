import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { FormsComponent } from './components/forms/forms.component';
import { AdvancedElementsComponent } from './components/advanced-elements/advanced-elements.component';
import { BasicElementsComponent } from './components/basic-elements/basic-elements.component';
import { FormWizardComponent } from './components/form-wizard/form-wizard.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { ImageCroppingComponent } from './components/image-cropping/image-cropping.component';
import { SummernoteComponent } from './components/summernote/summernote.component';
import { CkEditorComponent } from './components/ck-editor/ck-editor.component';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { FormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { NgxCkeditorModule } from 'ngx-ckeditor4';
import { ImageCropperModule } from 'ngx-image-cropper';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';
import { CoreModule } from 'src/app/core/core.module';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    FormValidationComponent,
    FormsComponent,
    AdvancedElementsComponent,
    BasicElementsComponent,
    FormWizardComponent,
    DragDropComponent,
    ImageCroppingComponent,
    SummernoteComponent,
    CkEditorComponent,
    MarkdownComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsRoutingModule,
    NgxDropzoneModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    LMarkdownEditorModule,
    NgxCkeditorModule.forRoot({
      url: 'https://cdn.bootcss.com/ckeditor/4.11.3/ckeditor.js',
    }),
    ImageCropperModule,
    NgbModule,
    NgxMaskModule.forRoot(),
    ColorPickerModule,
    NgMultiSelectDropDownModule.forRoot(),
    TagInputModule,
    NouisliderModule,
  ],
})
export class FormModule {}
