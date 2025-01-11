import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-testing',
  standalone: false,

  // templateUrl: './testing.component.html',
  template: `
  <!-- {{'09.05.1998' | date}} -->
  <!-- <div *ngFor="let name of names | keyvalue">{{name.key}} - {{name.value}}</div> -->
  
  TestTemplate
  <hr>
  <input type="text" [(ngModel)] = "data">
  <hr>
  <!-- content yakalandi. -->
  <ng-content></ng-content>
  `,
  styleUrl: './testing.component.scss'
})
export class TestingComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input() data: string;

  ngOnDestroy(): void {
    console.log("8. Destroey...");
  }

  ngAfterViewChecked(): void {
    console.log("7. ngAfterViewChecked");
  }

  ngAfterViewInit(): void {
    console.log("6. ngAfterViewInit");
  }
 
  ngAfterContentChecked(): void {
    console.log("5. ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    console.log("4. ngAfterContentInit");
  }

  ngDoCheck(): void {
    console.log("3. DO CHECK");
  }

  ngOnInit(): void {
    console.log("2. ngOnInit");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("1. OnChanges");
    ;
  }
  // names: Map<number, string> = new Map([[1, 'Erdem'], [2, 'Berkay'], [3, "Demet"]])
}
