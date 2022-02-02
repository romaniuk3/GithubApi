import { Component, OnInit } from '@angular/core';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  repositories?: Array<any>;
  filteredRepositories?: Array<any>;


  constructor(private githubService: GithubService, private filterByNamePipe: FilterByNamePipe) { }

  ngOnInit(): void {
  }

  getRepositories(query: any = ''): void {
    this.githubService.getRepositories().subscribe((data) => {
      this.repositories = data;
      this.filterRepositoriesByName(query);
    });
  }

  private filterRepositoriesByName(query: string): void {
    this.filteredRepositories = this.filterByNamePipe.transform(this.repositories!, query);
  }
}
