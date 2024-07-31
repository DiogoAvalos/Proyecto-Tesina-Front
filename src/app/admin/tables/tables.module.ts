import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './components/tables/tables.component';
import { TablesExampleComponent } from './components/tables-example/tables-example.component';
import { NormalTablesComponent } from './components/normal-tables/normal-tables.component';
import { EditableTablesComponent } from './components/editable-tables/editable-tables.component';
import { TablesColorComponent } from './components/tables-color/tables-color.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { TableDraggerComponent } from './components/table-dragger/table-dragger.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PrintService } from 'src/app/services/print.service';
import { CoreModule } from 'src/app/core/core.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    TablesComponent,
    TablesExampleComponent,
    NormalTablesComponent,
    EditableTablesComponent,
    TablesColorComponent,
    TableFilterComponent,
    TableDraggerComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    TablesRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [PrintService],
})
export class TablesModule {}
