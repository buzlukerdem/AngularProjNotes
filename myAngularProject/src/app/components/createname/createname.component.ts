import { Component } from '@angular/core';
import { NameService } from '../../services/name.service';

@Component({
  selector: 'app-createname',
  standalone: false,
  template: `
  <input type="text" placeholder="name" #txtname><br>
  <button (click)="createName(txtname.value)">create</button>
  <button (click)="deleteName()">delete</button>
  `
})
export class CreatenameComponent {
  constructor(private nameService: NameService) {}

  createName(name: string) {
    this.nameService.AddName(name);
  }
  deleteName(){
    this.nameService.RemoveName();
  }
}
