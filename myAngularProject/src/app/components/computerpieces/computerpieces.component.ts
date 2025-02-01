import { Component } from '@angular/core';

@Component({
  selector: 'app-computerpieces',
  standalone: false,
  
  template: `
  Computer
    <ul>
      <li><a routerLink="computer/:piece">Motherboard</a></li>
      <li><a routerLink="computer/:piece">CPU</a></li>
      <li><a routerLink="computer/:piece">GPU</a></li>
      <li><a routerLink="computer/:piece">RAM</a></li>
    </ul>
  `

})
export class ComputerpiecesComponent {

}
