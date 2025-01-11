import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  template:`
  <p>ChildComponent</p>
  `,
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {

  ngOnInit(): void {
    this.dataEvent.emit({message: 'Merhaba'})
  }
  @Output() dataEvent: EventEmitter<any>
   = new EventEmitter();
}
