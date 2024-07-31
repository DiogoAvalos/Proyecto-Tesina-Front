import { Injectable } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';

@Injectable({
  providedIn: 'root',
})
export class TreeviewMakerService {
  getNodes(): TreeviewItem[] {
    const parent1 = new TreeviewItem({
      text: 'Parent 1',
      value: 9,
      children: [
        {
          text: 'Child 1',
          value: 91,
          children: [
            {
              text: 'Grandchild 1',
              value: 911,
            },
            {
              text: 'Grandchild 2',
              value: 912,
            },
          ],
        },
      ],
    });
    const parent2 = new TreeviewItem({
      text: 'Parent 2',
      value: 0,
    });
    const parent3 = new TreeviewItem({
      text: 'Parent 3',
      value: 0,
    });
    const parent4 = new TreeviewItem({
      text: 'Parent 4',
      value: 0,
    });

    return [parent1, parent2, parent3, parent4];
  }
}
