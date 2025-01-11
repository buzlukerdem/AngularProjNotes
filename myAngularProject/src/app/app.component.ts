import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <!-- <div  *ngIf="true">Deneme</div> -->
  <!-- <div *appTest="true">Deneme</div> -->
   <!-- <div *appTest="6">AAA</div> -->
  <!-- <div *appTest="5, let i;">Erdem {{i}}</div> -->
  <!-- <div *appTest="array, let harf; let i = index">{{harf}} - {{i}}</div> -->
  <!-- <div *ngFor="let name of names | keyvalue ">{{name.key}} - {{name.value}}</div> -->
  <!-- <app-parent></app-parent> -->
   <app-testing data="input">content deger</app-testing>
  `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myAngularProject';
  // array: string[] = ["A1","B1","C1","D1"]
  names: Map<number, string> = new Map([[1, 'Erdem'], [2, 'Berkay'], [3, "Demet"]])
}
