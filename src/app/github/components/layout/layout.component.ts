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
  inputValue: string = '';


  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  handleChange(e: any) {
    this.inputValue = e.target.value;
    this.getUser();
  }

  getRepos() {
    const url = "https://api.github.com/users/romaniuk3/repos";
    this.githubService.getMyOwnData(url).subscribe((data) => {
      this.repos = data;
      this.active = true;
    });
  }
  getUser() {
    const url = `https://api.github.com/users/${this.inputValue}/repos`;
    this.githubService.getMyOwnData(url).subscribe((data) => {
      this.repos = data;
      this.active = true;
    });
  }

}
