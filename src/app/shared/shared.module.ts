import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { MaterialExampleModule } from 'src/material.module';




@NgModule({
  declarations: [
    ModalDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialExampleModule
  ]
})
export class SharedModule { }
