import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refBooks',
  standalone: true
})
export class RefBooksPipe implements PipeTransform {

  transform(value: number): string {
    return `Ref.- ${value}.`;
  }

}
