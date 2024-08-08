import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { PagingTableComponent } from './paging-table/paging-table.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: 'basic-table',
        component: BasicTableComponent,
        data: {
          title: 'basic elements'
        }
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'paging-table',
        component: PagingTableComponent,
        data: {
          title: 'Paging Table'
        }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
