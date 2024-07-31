import { Component } from '@angular/core';

@Component({
  selector: 'ico-editable-tables',
  templateUrl: './editable-tables.component.html',
  styleUrls: ['./editable-tables.component.scss'],
})
export class EditableTablesComponent {
  public editableData = [
    {
      id: 1,
      name: 'Car',
      cost: 100,
      profit: 200,
      fun: 0,
      editor: { type: 'text' },
      isEdit: false,
    },
    {
      id: 2,
      name: 'Bike',
      cost: 330,
      profit: 240,
      fun: 1,
      editor: { type: 'text' },
      isEdit: false,
    },
    {
      id: 3,
      name: 'Plane',
      cost: 430,
      profit: 540,
      fun: 3,
      editor: { type: 'text' },
      isEdit: false,
    },
    {
      id: 4,
      name: 'Yacht',
      cost: 100,
      profit: 200,
      fun: 0,
      editor: { type: 'text' },
      isEdit: false,
    },
    {
      id: 5,
      name: 'Segway',
      cost: 330,
      profit: 240,
      fun: 1,
      editor: { type: 'text' },
      isEdit: false,
    },
  ];

  editCont(id) {}
}
