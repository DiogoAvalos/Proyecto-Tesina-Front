import { NgxEchartsModule } from 'ngx-echarts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraPagesRoutingModule } from './extra-pages-routing.module';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileTwoComponent } from './profile-two/profile-two.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ImageGalleryTwoComponent } from './image-gallery-two/image-gallery-two.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';
import { PricingComponent } from './pricing/pricing.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoicesTwoComponent } from './invoices-two/invoices-two.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { TeamBoardComponent } from './team-board/team-board.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FaqComponent } from './faq/faq.component';
import { ExtraPageComponent } from './extra-page/extra-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    BlankPageComponent,
    ProfileComponent,
    ProfileTwoComponent,
    ImageGalleryComponent,
    ImageGalleryTwoComponent,
    TimeLineComponent,
    HorizontalTimelineComponent,
    PricingComponent,
    InvoicesComponent,
    InvoicesTwoComponent,
    SearchResultComponent,
    HelperClassesComponent,
    TeamBoardComponent,
    ProjectsListComponent,
    TestimonialsComponent,
    FaqComponent,
    ExtraPageComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    ExtraPagesRoutingModule,
    NgbModule,
    LightboxModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class ExtraPagesModule {}
