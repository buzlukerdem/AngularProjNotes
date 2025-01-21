import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class NameService {

  constructor() { }
  private names: string[] = [];

  AddName(name:string){
    this.names.push(name)
  }

  GetNames() : string[]{
    return this.names
  }
}
