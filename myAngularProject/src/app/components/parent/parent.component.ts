import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  
  template:`
  <p>ParentComponent</p>
<app-child (dataEvent)="childEvent($event)">

</app-child>
  `,
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  childEvent(obj: any){
    
  }
}
