import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriesModule } from './repositories/repositories.module';
import { GithubService } from './services/github.service';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RepositoriesModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    GithubService
  ]
})
export class GithubModule { }
