import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { IndexComponent } from './components/index/index.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsReadComponent } from './components/products-read/products-read.component';
import { ProductsUpdateComponent } from './components/products-update/products-update.component';
import { ProductsDeleteComponent } from './components/products-delete/products-delete.component';
import { ProductsAllComponent } from './components/products-all/products-all.component';
import { ProductsService } from './services/products.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialExampleModule } from 'src/material.module';


@NgModule({
  declarations: [
    IndexComponent,
    ProductsCreateComponent,
    ProductsReadComponent,
    ProductsUpdateComponent,
    ProductsDeleteComponent,
    ProductsAllComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  providers: [
    ProductsService,
    DatePipe
  ]
})
export class ProductsModule { }
