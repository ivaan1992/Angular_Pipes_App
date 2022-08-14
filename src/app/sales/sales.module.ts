import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';



@NgModule({
  declarations: [
    NumbersComponent,
    BasicsComponent,
    OrderComponent,
    NotCommonsComponent
  ],
  exports: [
    NumbersComponent,
    BasicsComponent,
    OrderComponent,
    NotCommonsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SalesModule { }
