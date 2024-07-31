import { Component } from '@angular/core';

@Component({
  selector: 'ico-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent {
  public filterData: any;
  public todoList:any = [{
    id: 1,
    status: "approved",
    url: "assets/images/xs/avatar1.jpg",
    name: 'jacob',
    email: 'jacob@gnail.com',
    class:"badge badge-success"
  },
  {
    id: 2,
    status: "suspended",
    url: "assets/images/xs/avatar2.jpg",
    name: 'charlotte',
    email: 'td>a.charlotte@gnail.com',
    class:"badge badge-warning"
  },
  {
    id: 3,
    status: "blocked",
    url: "assets/images/xs/avatar3.jpg",
    name: 'grayson',
    email: 'grayson@yahoo.com',
    class:"badge badge-danger"
  },
  {
    id: 4,
    status: "approved",
    url: "assets/images/xs/avatar4.jpg",
    name: 'jacob',
    email: 'jacob@gnail.com',
    class:"badge badge-success"
  },
  {
    id: 5,
    status: "approved",
    url: "assets/images/xs/avatar5.jpg",
    name: 'amelia',
    email: 'amelia@gnail.com',
    class:"badge badge-success"
  },
  {
    id: 6,
    status: "pending",
    url: "assets/images/xs/avatar6.jpg",
    name: 'michael',
    email: 'michael@gmail.com',
    class:"badge badge-info"
  },
  {
    id: 7,
    status: "pending",
    url: "assets/images/xs/avatar7.jpg",
    name: 'michael',
    email: 'michael@gmail.com',
    class:"badge badge-info"
  }]

  loadData(){
    this.todoList = [{
      id: 1,
      status: "approved",
      url: "assets/images/xs/avatar1.jpg",
      name: 'jacob',
      email: 'jacob@gnail.com',
      class:"badge badge-success"
    },
    {
      id: 2,
      status: "suspended",
      url: "assets/images/xs/avatar2.jpg",
      name: 'charlotte',
      email: 'td>a.charlotte@gnail.com',
      class:"badge badge-warning"
    },
    {
      id: 3,
      status: "blocked",
      url: "assets/images/xs/avatar3.jpg",
      name: 'grayson',
      email: 'grayson@yahoo.com',
      class:"badge badge-danger"
    },
    {
      id: 4,
      status: "approved",
      url: "assets/images/xs/avatar4.jpg",
      name: 'jacob',
      email: 'jacob@gnail.com',
      class:"badge badge-success"
    },
    {
      id: 5,
      status: "approved",
      url: "assets/images/xs/avatar5.jpg",
      name: 'amelia',
      email: 'amelia@gnail.com',
      class:"badge badge-success"
    },
    {
      id: 6,
      status: "pending",
      url: "assets/images/xs/avatar6.jpg",
      name: 'michael',
      email: 'michael@gmail.com',
      class:"badge badge-info"
    },
    {
      id: 7,
      status: "pending",
      url: "assets/images/xs/avatar7.jpg",
      name: 'michael',
      email: 'michael@gmail.com',
      class:"badge badge-info"
    }]
  }

  todo(status){
    this.loadData();
    if(status.toLowerCase() == 'all')
    {
      this.filterData = this.todoList;
    }else{
      this.filterData = this.todoList.filter(x => (x.status.toLowerCase() == status.toLowerCase() == true));
    }

    this.todoList = this.filterData;
  }
}
