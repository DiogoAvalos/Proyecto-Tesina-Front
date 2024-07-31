import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { title: ':: Iconic Angular :: Ready APP ::' } },
      { path: 'new-post', component: NewPostComponent, data: { title: ':: Iconic Angular :: Ready APP ::' } },
      { path: 'blog-list', component: BlogListComponent, data: { title: ':: Iconic Angular :: Ready APP ::' } },
      { path: 'blog-detail', component: BlogDetailComponent, data: { title: ':: Iconic Angular :: Ready APP ::' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
