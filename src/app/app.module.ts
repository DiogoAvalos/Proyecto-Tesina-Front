import { NgxCkeditorModule } from 'ngx-ckeditor4';
import { PrintService } from './services/print.service';
import { CsvdownloadService } from './services/csvdownload.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ProgressBarModule } from 'angular-progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GaugeChartModule } from 'angular-gauge-chart';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MorrisJsModule } from 'angular-morris-js';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NestableModule } from 'ngx-nestable';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPrintModule } from 'ngx-print';
import { LightboxModule } from 'ngx-lightbox';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { TreeviewMakerService } from './services/treeview-maker.service';
import { TreeModule } from '@circlon/angular-tree-component';
import { TreeviewModule } from 'ngx-treeview';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    FormsModule,
    NgbModule,
    NgApexchartsModule,
    ProgressBarModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    GaugeChartModule,
    NgxDropzoneModule,
    MorrisJsModule,
    SweetAlert2Module.forRoot(),
    CKEditorModule,
    NestableModule,
    DragDropModule,
    MarkdownModule.forRoot(),
    CommonModule,
    CoreModule,
    NgbModule,
    NgApexchartsModule,
    NestableModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPrintModule,
    LightboxModule,
    LMarkdownEditorModule,
    AngularYandexMapsModule,
    TreeviewModule.forRoot(),
    TreeModule,
    NgxCkeditorModule,
  ],
  providers: [CsvdownloadService, PrintService, TreeviewMakerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
