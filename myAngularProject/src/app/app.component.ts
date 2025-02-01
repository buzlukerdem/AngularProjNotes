import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
   <!-- <div  *ngIf="true">Deneme</div> 
   <div *appTest="true">Deneme</div>
   <div *appTest="6">AAA</div> 
    <div *appTest="5, let i;">Erdem {{i}}</div> 
   <div *appTest="array, let harf; let i = index">{{harf}} - {{i}}</div> 
   <div *ngFor="let name of names | keyvalue ">{{name.key}} - {{name.value}}</div> 
   <app-parent></app-parent> 
   <app-testing data="input">content deger</app-testing> 
   template
  <app-template-form-test></app-template-form-test>
  <hr>
  model-reactive
  <app-model-driven-form-test></app-model-driven-form-test> 
  <hr>
  validate
  <app-validate></app-validate> 
  
  <app-createname></app-createname>

  <app-readname></app-readname> -->
  <a routerLink="home">Home</a> |
  <a routerLink="about">About</a> |
  <a routerLink="contact">Contact</a> |
  <a routerLink="readname">ReadName</a> |
  <a routerLink="creatname">CreatName</a> |
  <a routerLink="computer">Computer</a>
  <br>
  <router-outlet></router-outlet>

  `,
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myAngularProject';

}
