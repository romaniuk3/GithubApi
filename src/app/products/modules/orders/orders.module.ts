import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderCreateComponent } from './components/order-create/order-create.component';


@NgModule({
  declarations: [
    OrderListComponent,
    OrderCreateComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
