import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { filter, map, fromEvent, of, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-by-template-driven',
  templateUrl: './search-by-template-driven.component.html',
  styleUrls: ['./search-by-template-driven.component.scss']
})
export class SearchByTemplateDrivenComponent implements OnInit {

  loginForm: any = {
    query: ''
  }
  
  @Input() repositories?: Array<any>
  @Output() onRepositoriesRequesting = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  requestRepositories(query: string): void {
    this.onRepositoriesRequesting.emit(query);
  }

  searchResult() {
    if(!/\d+/g.test(this.loginForm.query)) {
      this.requestRepositories(this.loginForm.query);
    }
  }
}
