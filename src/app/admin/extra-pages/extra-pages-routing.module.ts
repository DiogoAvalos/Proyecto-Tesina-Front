import { ExtraPageComponent } from './extra-page/extra-page.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';
import { ImageGalleryTwoComponent } from './image-gallery-two/image-gallery-two.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { PricingComponent } from './pricing/pricing.component';
import { ProfileTwoComponent } from './profile-two/profile-two.component';
import { ProfileComponent } from './profile/profile.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { InvoicesTwoComponent } from './invoices-two/invoices-two.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { TeamBoardComponent } from './team-board/team-board.component';
import { ProjectBoardComponent } from '../dashboard/project-board/project-board.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

const routes: Routes = [
  {
    path: '',
    component: ExtraPageComponent,
    children: [
      {
        path: 'blank-page',
        component: BlankPageComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'profile-v2',
        component: ProfileTwoComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'image-gallery',
        component: ImageGalleryComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'image-gallery-v2',
        component: ImageGalleryTwoComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'timeline',
        component: TimeLineComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'horizontal-timeline',
        component: HorizontalTimelineComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'pricing',
        component: PricingComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'invoices',
        component: InvoicesComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'invoices-v2',
        component: InvoicesTwoComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'search-result',
        component: SearchResultComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'helper-classes',
        component: HelperClassesComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'teams-board',
        component: TeamBoardComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'projects-list',
        component: ProjectsListComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'testimonials',
        component: TestimonialsComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraPagesRoutingModule {}
