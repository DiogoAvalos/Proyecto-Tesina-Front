import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import tableDragger from 'table-dragger';

@Component({
  selector: 'ico-table-dragger',
  templateUrl: './table-dragger.component.html',
  styleUrls: ['./table-dragger.component.scss'],
})
export class TableDraggerComponent implements OnInit {
  public dragBodyData = [
    {
      movie_name: 'Star Wars',
      iclass: 'table-dragger-handle sindu_handle',
      Genre: 'Adventure, Sci-fi',
      Year: 1977,
      Gross: '$460,935,665',
    },
    {
      movie_name: 'Howard The Duck',
      iclass: 'table-dragger-handle sindu_handle',
      Genre: 'Comedy',
      Year: 1986,
      Gross: '$16,295,774',
    },
    {
      movie_name: 'American Graffiti',
      iclass: 'table-dragger-handle sindu_handle',
      Genre: 'Comedy, Drama',
      Year: 1973,
      Gross: '$115,000,000',
    },
  ];

  ngOnInit(): void {
    var el = document.getElementById('table');
    var dragger = tableDragger(el, {
      mode: 'row',
      dragHandler: '.handle',
      onlyBody: true,
    });
    dragger.on('drop', function (from, to) {
      console.log(from);
      console.log(to);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.dragBodyData, event.previousIndex, event.currentIndex);
  }
}
