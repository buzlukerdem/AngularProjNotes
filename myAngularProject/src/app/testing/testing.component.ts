import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  standalone: false,

  // templateUrl: './testing.component.html',
  template: `
  <!-- {{'09.05.1998' | date}} -->
  <!-- <div *ngFor="let name of names | keyvalue">{{name.key}} - {{name.value}}</div> -->
  `,
  styleUrl: './testing.component.scss'
})
export class TestingComponent {
  // names: Map<number, string> = new Map([[1, 'Erdem'], [2, 'Berkay'], [3, "Demet"]])
}
