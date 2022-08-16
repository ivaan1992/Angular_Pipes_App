import { Component } from '@angular/core';
import { Color, Hero } from '../../intefaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: []
})
export class OrderComponent {
  mayus: boolean = true;

  orderBy: string = '';

  heroes: Hero[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Flash',
      fly: true,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      fly: true,
      color: Color.green
    },
    {
      name: 'Wonder Woman',
      fly: false,
      color: Color.yellow
    },
  ];


  changeText() {
    this.mayus = !this.mayus;
  }

  changeOrder( value: string ) {
    this.orderBy = value;
    console.log(value)
  }
}
