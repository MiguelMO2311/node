import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroSymbol',
  standalone: true
})
export class EuroSymbolPipe implements PipeTransform {

  transform(value: number): string {
    return `${value} €`;
  }

}
