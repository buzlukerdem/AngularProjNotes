import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-test',
  standalone: false,
  
  // templateUrl: './template-form-test.component.html',
  template:`
  
  <form #frm="ngForm" (ngSubmit)="onSubmit(frm.value)">
    <input type="text" name="name" placeholder="Name" ngModel><br>
    <input type="text" name="surname" placeholder="Surname" ngModel><br>
    <input type="email" name="mail" placeholder="Mail" ngModel><br>
    <input type="tel" name="tel" placeholder="Telephone" ngModel><br>

    <button>Submit</button>
  </form>
  `,
  styleUrl: './template-form-test.component.scss'
})
export class TemplateFormTestComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.form.setValue({
        name:"Erdem",
        surname: "Buzluk",
        mail: "be@gmail.com",
        tel: 12345
      });
    }, 200);
  }
  @ViewChild("frm", {static: true}) form: NgForm;
  
  onSubmit(data: {name:string, surname:string, mail:string, tel:number})
  {
    // console.log(this.form.valid);
    
    console.log(data);
  }
  // onSubmit(data)
  // {
  //   console.log(data);
  // }
}
