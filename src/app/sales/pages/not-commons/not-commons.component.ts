import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styleUrls: []
})
export class NotCommonsComponent {

  // i18nSelect Pipe
  name: string = 'Ivan';
  genre: string = 'masculine';

  invitationMap = {
    'masculine': 'saludarlo',
    'femenine': 'saludarla',
  }

  changeClient() {
    this.name = 'Diana';
    this.genre = 'femenine';
  }

  // i18nPlural Pipe

  clients: string[] = ['Ivan','Aaron','Edwin','Billy','Chris','Zack','John'];
  clientsMap = {
    '=0': 'We do not have any customer waiting.',
    '=1': 'We only have 1 customer waiting.',
    'other': 'We have # customers waiting.'
  }

  deleteClient() {
    this.clients.shift()
  }

  // KeyValue Pipe

  person = {
    name: 'Ismael Ivan',
    age: 30,
    job: 'Software Developer',
    location: 'Puebla, Mex.'
  }

  //Json Pipe

  heroes = [
    {
      name: 'Spiderman',
      fly: true
    },
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Batman',
      fly: false
    },
    {
      name: 'Robbin',
      fly: false
    },
    {
      name: 'Iron Man',
      fly: true
    },
  ]

  // Async Pipe
  myObservable = interval(2000); // 0,1,2,3,4,5,6,

  valorPromesa = new Promise( (resolve, reject) => {

   setTimeout(() => {
     resolve( 'Promesa resuelta' );
   }, 3500 );

 });
}
