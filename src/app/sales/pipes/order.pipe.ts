import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../intefaces/sales.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform( heroes: Hero[] ): Hero[] {

    heroes = heroes.sort( (a,b) => ( a.name >b.name ) ? 1 : -1 );
    return heroes;
  }

}
