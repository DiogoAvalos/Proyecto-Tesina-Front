import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'data',
        component: DataComponent,
        data: {
          title: 'data'
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
