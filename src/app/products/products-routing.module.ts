import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { IndexComponent } from './components/index/index.component';
import { ProductsAllComponent } from './components/products-all/products-all.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ProductsReadComponent } from './components/products-read/products-read.component';
import { ProductsUpdateComponent } from './components/products-update/products-update.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'all',
        component: ProductsAllComponent
      },
      {
        path: 'add',
        component: ProductsCreateComponent
      },
      {
        path: 'orders',
        loadChildren: () => import('./modules/orders/orders.module').then((m) => m.OrdersModule)
      },
      {
        path: ':product_id',
        children: [
          {
            path: 'update',
            component: ProductsUpdateComponent
          },
          {
            path: 'delete',
            component: DeleteDialogComponent
          },
          {
            path: 'read',
            component: ProductsReadComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
