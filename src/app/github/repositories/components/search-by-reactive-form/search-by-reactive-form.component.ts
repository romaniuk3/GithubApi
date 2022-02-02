import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime, filter, map } from 'rxjs';

@Component({
  selector: 'app-search-by-reactive-form',
  templateUrl: './search-by-reactive-form.component.html',
  styleUrls: ['./search-by-reactive-form.component.scss']
})
export class SearchByReactiveFormComponent implements OnInit {

  @Input() repositories?: Array<any>;
  @Output() onRepositoriesRequesting = new EventEmitter();

  searchForm = this.fb.group({
    query: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscriptionOnSearchChanges();
  }

  requestRepositories(query: string): void {
    this.onRepositoriesRequesting.emit(query);
  }

  private subscriptionOnSearchChanges(): void {
    this.searchForm.valueChanges
    .pipe(
      debounceTime(300),
      map((formValues) => formValues.query),
      filter((query) => !/^\d+$/.test(query)),
    )
    .subscribe((query: string) => {
      console.log(query)
      this.requestRepositories(query);
    });
  }

}
