import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: []
})
export class OrderComponent {
 mayus: boolean = true;

  changeText() {
    this.mayus = !this.mayus;
  }
}
