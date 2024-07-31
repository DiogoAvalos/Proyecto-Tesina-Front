import { TablesColorComponent } from './components/tables-color/tables-color.component';
import { NormalTablesComponent } from './components/normal-tables/normal-tables.component';
import { TablesExampleComponent } from './components/tables-example/tables-example.component';
import { TablesComponent } from './components/tables/tables.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditableTablesComponent } from './components/editable-tables/editable-tables.component';
import { TableFilterComponent } from './components/table-filter/table-filter.component';
import { TableDraggerComponent } from './components/table-dragger/table-dragger.component';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full' },
      {
        path: 'table-example',
        component: TablesExampleComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'normal-tables',
        component: NormalTablesComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'editable-tables',
        component: EditableTablesComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'tables-color',
        component: TablesColorComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'table-filter',
        component: TableFilterComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
      {
        path: 'table-dragger',
        component: TableDraggerComponent,
        data: { title: ':: Iconic Angular :: Ready APP ::' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}
