import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderListComponent} from "./components/order-list/order-list.component";
import {OrderCreateComponent} from "./components/order-create/order-create.component";

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent,
    pathMatch: 'full',
    children: [
      {
        path: 'add',
        component: OrderCreateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
