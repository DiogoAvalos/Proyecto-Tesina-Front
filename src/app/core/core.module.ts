import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailSparklineCardComponent } from './detail-sparkline-card/detail-sparkline-card.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { BaicDetailCardComponent } from './baic-detail-card/baic-detail-card.component';
import { DonutChartCardComponent } from './donut-chart-card/donut-chart-card.component';
import { AppliancesWidgetComponent } from './appliances-widget/appliances-widget.component';
import { BgPrimaryCardComponent } from './bg-primary-card/bg-primary-card.component';
import { CurrencyCoinTileComponent } from './currency-coin-tile/currency-coin-tile.component';
import { AnalyticsWeekCardComponent } from './analytics-week-card/analytics-week-card.component';
import { SparklineBackgroundCardComponent } from './sparkline-background-card/sparkline-background-card.component';
import { ChatWidgetComponent } from './chat-widget/chat-widget.component';
import { SparklineIcondetailWidgetComponent } from './sparkline-icondetail-widget/sparkline-icondetail-widget.component';
import { SimpleSparklineComponent } from './simple-sparkline/simple-sparkline.component';
import { MiniChartTilecardComponent } from './mini-chart-tilecard/mini-chart-tilecard.component';
import { TopBarchartTilecardComponent } from './top-barchart-tilecard/top-barchart-tilecard.component';
import { FaIconValueTileComponent } from './fa-icon-value-tile/fa-icon-value-tile.component';
import { ProgressBarModule } from 'angular-progress-bar';
import { TopChartMdTileComponent } from './top-chart-md-tile/top-chart-md-tile.component';
import { SimpleProgressComponent } from './simple-progress/simple-progress.component';
import { CommonActionDropdownComponent } from './common-action-dropdown/common-action-dropdown.component';

@NgModule({
  declarations: [
    DetailSparklineCardComponent,
    BaicDetailCardComponent,
    DonutChartCardComponent,
    AppliancesWidgetComponent,
    BgPrimaryCardComponent,
    CurrencyCoinTileComponent,
    AnalyticsWeekCardComponent,
    SparklineBackgroundCardComponent,
    ChatWidgetComponent,
    SparklineIcondetailWidgetComponent,
    SimpleSparklineComponent,
    MiniChartTilecardComponent,
    TopBarchartTilecardComponent,
    FaIconValueTileComponent,
    TopChartMdTileComponent,
    SimpleProgressComponent,
    CommonActionDropdownComponent,
  ],
  exports: [
    DetailSparklineCardComponent,
    BaicDetailCardComponent,
    DonutChartCardComponent,
    AppliancesWidgetComponent,
    BgPrimaryCardComponent,
    CurrencyCoinTileComponent,
    AnalyticsWeekCardComponent,
    SparklineBackgroundCardComponent,
    ChatWidgetComponent,
    SparklineIcondetailWidgetComponent,
    SimpleSparklineComponent,
    MiniChartTilecardComponent,
    TopBarchartTilecardComponent,
    FaIconValueTileComponent,
    TopChartMdTileComponent,
    SimpleProgressComponent,
    CommonActionDropdownComponent,
  ],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    ProgressBarModule,
    NgbModule,
  ],
})
export class CoreModule {}
