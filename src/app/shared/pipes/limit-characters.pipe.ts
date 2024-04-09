import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'limitCharacters',
})
export class LimitCharactersPipe implements PipeTransform {
  transform(value: any, limit: any): any {
    return value.split('').slice(0, limit).join('') + '...';
  }
}
