import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: false
})
export class TestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
