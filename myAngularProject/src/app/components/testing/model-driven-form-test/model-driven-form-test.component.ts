import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  capitalLetterValidator} from '../../../validators/customcapitalletter';
import { capitalLetterValidator2 } from '../../../validators/customcapitalletter2';

@Component({
  selector: 'app-model-driven-form-test',
  standalone: false,
  template: `
    <form [formGroup]="frm" (ngSubmit)="onSubmit(frm.value)">
    <input type="text" placeholder="Name" formControlName="name"><br>
    <div *ngIf="!name.valid && (name.dirty || name.touched)">{{name.errors | json}}</div>

    <input type="text" placeholder="Surname" formControlName="surname" ><br>
    <div *ngIf="!surname.valid && (surname.dirty || surname.touched)">{{surname.errors | json}}</div>

    <input type="email" placeholder="Mail" formControlName="email"><br>
    <div *ngIf="!email.valid && (email.dirty || email.touched)">{{email.errors | json}}</div>

    <input type="tel" placeholder="Telephone" formControlName="tel"><br>

    <button>Submit</button>
    <br>
    valid: {{this.frm.valid}}
  </form>
  `,
  // templateUrl: './model-driven-form-test.component.html',
  styleUrl: './model-driven-form-test.component.scss'
})
export class ModelDrivenFormTestComponent {
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["", [Validators.required, capitalLetterValidator]],
      surname: ["", [Validators.required, capitalLetterValidator2(3)]],
      email: ["", [Validators.required, Validators.email]],
      tel: [""]
    })
  }
  get name(){
    return this.frm.get("name");
  }
  get surname(){
    return this.frm.get("surname");
  }
  get email(){
    return this.frm.get("email");
  }


  onSubmit(data) {
    console.log(data);
  }
}
