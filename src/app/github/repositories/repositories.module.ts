import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './components/repository/repository.component';
import { SearchByTemplateDrivenComponent } from './components/search-by-template-driven/search-by-template-driven.component';
import { SearchByReactiveFormComponent } from './components/search-by-reactive-form/search-by-reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RepositoryComponent,
    SearchByTemplateDrivenComponent,
    SearchByReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RepositoryComponent,
    SearchByReactiveFormComponent
  ]
})
export class RepositoriesModule { }
