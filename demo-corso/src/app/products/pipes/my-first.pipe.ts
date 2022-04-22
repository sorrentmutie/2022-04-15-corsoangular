import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFirst'
})
export class MyFirstPipe implements PipeTransform {

  transform(value: string, separator: string): string {
    return value.replace(/o/g,separator);
  }

}
