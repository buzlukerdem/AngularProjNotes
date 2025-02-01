import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class NameService {

  constructor() { }
  private names: string[] = [];

  AddName(name:string){
    this.names.push(name)
    console.log(this.names.length)
  }
  RemoveName(){
    this.names.pop();
    console.log(this.names.length)
  }

  GetNames() : string[]{
    return this.names
  }
}
