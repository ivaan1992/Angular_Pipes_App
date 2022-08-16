// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

// Components
import { NumbersComponent } from './pages/numbers/numbers.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';

// Customized Pipes
import { UpperPipe } from './pipes/upper.pipe';
import { FlyPipe } from './pipes/fly.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    BasicsComponent,
    OrderComponent,
    NotCommonsComponent,
    UpperPipe,
    FlyPipe
  ],
  exports: [
    NumbersComponent,
    BasicsComponent,
    OrderComponent,
    NotCommonsComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ]
})
export class SalesModule { }
