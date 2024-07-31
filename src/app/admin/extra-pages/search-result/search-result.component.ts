import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ico-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  activeTb: any = 'web';

  constructor() { }

  ngOnInit(): void {
  }
  setActiveTab(activeTab){
    this.activeTb = activeTab;
  }
}
