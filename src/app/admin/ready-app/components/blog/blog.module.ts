import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BlogComponent, DashboardComponent, NewPostComponent, BlogListComponent, BlogDetailComponent],
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    CoreModule,
    CommonModule,
    BlogRoutingModule,
    NgApexchartsModule,
    CKEditorModule,
    FormsModule
  ]
})
export class BlogModule { }
