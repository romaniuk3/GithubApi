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
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';


const angularMaterial = [
  MatButtonModule,
  MatCardModule,
  MatProgressBarModule,
  MatDividerModule,
  MatSnackBarModule,
  MatFormFieldModule,
]

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
    angularMaterial
  ],
  providers: [
    ProductsService,
    DatePipe
  ]
})
export class ProductsModule { }
