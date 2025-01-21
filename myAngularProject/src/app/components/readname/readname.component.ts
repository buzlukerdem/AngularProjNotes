import { Component } from '@angular/core';
import { NameService } from '../../services/name.service';

@Component({
  selector: 'app-readname',
  standalone: false,
  template: `
  <ul>
    <li *ngFor="let n of this.nameService.GetNames()">
      {{n}}
    </li>
  </ul>`
})
export class ReadnameComponent {

  constructor(public nameService: NameService) {}
  
}
