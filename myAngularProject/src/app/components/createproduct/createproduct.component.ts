import { Component } from '@angular/core';

@Component({
  selector: 'app-createproduct',
  standalone: false,
  template:`
  <form>
    <input type="text" placeholder="product name">
    <input type="number" placeholder="product price">
    <input type="number" placeholder="product quantity">
    <br>
    <button>Create</button>
  </form>
  
  `,
})
export class CreateproductComponent {

}
