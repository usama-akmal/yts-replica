import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchOutput = new EventEmitter<String>();

  searchQuery: String = '';

  constructor() { }

  ngOnInit() {
  }

  onSearch(){
    if (this.searchQuery != '') {
      this.searchOutput.emit(this.searchQuery);
    }
  }
}
