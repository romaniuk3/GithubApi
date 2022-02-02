import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './components/repository/repository.component';

@NgModule({
  declarations: [
    RepositoryComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RepositoryComponent
  ]
})
export class RepositoriesModule { }
