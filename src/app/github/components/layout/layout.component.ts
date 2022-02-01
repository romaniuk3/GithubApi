import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  repos: any;
  active: boolean = false;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  getRepos() {
    this.githubService.getMyOwnData().subscribe((data) => {
      this.repos = data;
      console.log(data);
      this.active = true;
    });
  }

}
