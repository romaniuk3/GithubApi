import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  @Input() repositories: any;

  constructor() { }

  ngOnInit(): void {
  }

  get owner() {
    return this.repositories[0].owner;
  }
}
