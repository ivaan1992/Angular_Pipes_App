import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: []
})
export class BasicsComponent {
  nameLower   : string = 'ivan';
  nameUpper   : string = 'IVAN';
  nameComplete: string = 'isMaEl IvaN LinArEs gaOna';

}
