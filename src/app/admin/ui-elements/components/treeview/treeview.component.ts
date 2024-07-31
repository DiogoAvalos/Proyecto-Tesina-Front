import { TreeviewMakerService } from '../../../../services/treeview-maker.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';

@Component({
  selector: 'ico-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.scss'],
  providers: [TreeviewMakerService],
})
export class TreeviewComponent implements OnInit {
  public data: any[] = [
    {
      text: 'sitecore',
      icon: 'k-i-globe-outline',
      items: [
        {
          text: 'content',
          icon: 'k-i-folder',
          items: [
            {
              text: 'Saxoprint',
              icon: 'k-i-globe-outline',
              items: [{ text: 'home', icon: 'k-i-globe' }],
            },
            {
              text: 'Laserline',
              icon: 'k-i-globe-outline',
              items: [{ text: 'home', icon: 'k-i-globe' }],
            },
          ],
        },
        {
          text: 'layout',
          icon: 'k-i-folder',
          items: [
            { text: 'mockup.jpg', icon: 'k-i-folder' },
            { text: 'Research.pdf', icon: 'k-i-folder' },
          ],
        },
      ],
    },
  ];

  nodes = [
    {
      name: 'Parent 1',
      children: [{ name: 'child 1' }, { name: 'child 2' }],
    },
    {
      name: 'Parent 2',
      children: [
        { name: 'child2.1', children: [] },
        { name: 'child2.2', children: [{ name: 'grandchild 2.2.1' }] },
      ],
    },
    { name: 'Parent 3' },
    { name: 'Parent 4', children: [] },
    { name: 'Parent 5', children: null },
  ];

  @ViewChild('tree') tree;

  dropdownEnabled = true;
  searchWithFilter: TreeviewItem[];
  selectableNodes: TreeviewItem[];

  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: false,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
  });

  selectable = TreeviewConfig.create({
    hasAllCheckBox: false,
    hasFilter: false,
    hasCollapseExpand: false,
    decoupleChildFromParent: false,
  });

  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark',
  ];
  buttonClass = this.buttonClasses[0];

  constructor(private service: TreeviewMakerService) {}

  ngAfterViewInit() {
    this.tree.treeModel.expandAll();
  }

  ngOnInit(): void {
    this.searchWithFilter = this.service.getNodes();
    this.selectableNodes = this.service.getNodes();
  }

  onFilterChange(value: string): void {
    console.log('filter:', value);
  }
}
