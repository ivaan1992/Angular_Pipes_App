import { Component } from '@angular/core';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styleUrls: []
})
export class NotCommonsComponent {

  name: string = 'Ivan';
  genre: string = 'masculine';

  invitationMap = {
    'masculine': 'saludarlo',
    'femenine': 'saludarla',
  }


}
