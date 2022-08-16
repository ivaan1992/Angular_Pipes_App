import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

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
}
