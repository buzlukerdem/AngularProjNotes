import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form-test',
  standalone: false,
  template: `
    <form [formGroup]="frm" (ngSubmit)="onSubmit(frm.value)">
    <input type="text" placeholder="Name" formControlName="name"><br>
    <input type="text" placeholder="Surname" formControlName="surname" ><br>
    <input type="email" placeholder="Mail" formControlName="email"><br>
    <input type="tel" placeholder="Telephone" formControlName="tel"><br>

    <button>Submit</button>
    <br>
    {{this.frm.valid}}
  </form>
  `,
  // templateUrl: './model-driven-form-test.component.html',
  styleUrl: './model-driven-form-test.component.scss'
})
export class ModelDrivenFormTestComponent {
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      name: ["", Validators.required],
      surname: [""],
      email: [""],
      tel: [""]
    })
  }

  onSubmit(data) {
    console.log(data);

  }
}
