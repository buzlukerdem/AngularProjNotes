import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchControl } from '../../validators/matchcontrol';

@Component({
  selector: 'app-validate',
  standalone: false,
  template: `
  <form [formGroup]="frm" (ngSubmit)="onSubmit(frm.value)">
    <input type="text" placeholder="password" formControlName="password">
    <input type="text" placeholder="confirm password" formControlName="passwordConfirm">
  <button>Kontrol</button>
  valid: {{frm.valid}}
  </form>

  
  `,
  // templateUrl: './validate.component.html',
  styleUrl: './validate.component.scss'
})
export class ValidateComponent {
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = formBuilder.group({
      password : ["", Validators.required],
      passwordConfirm: ["", Validators.required]
    },{validators: [matchControl("password","passwordConfirm")]})
  }


  onSubmit(data){
    console.log(data);
    console.log(data.validate);
  }
}
