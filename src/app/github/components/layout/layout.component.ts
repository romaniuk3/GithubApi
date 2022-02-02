import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  repositories: any;
  // inputValue: string = '';


  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  // handleChange(e: any) {
  //   this.inputValue = e.target.value;
  //   this.getUser();
  // }

  getRepos() {
    this.githubService.getRepositories().subscribe((data) => {
      this.repositories = data;
    });
  }

  // getUser() {
  //   const url = `https://api.github.com/users/${this.inputValue}/repos`;
  //   this.githubService.getRepositories().subscribe((data) => {
  //     this.repositories = data;
  //   });
  // }

}
