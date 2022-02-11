import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateFix'
})
export class DateFixPipe implements PipeTransform {

  transform(date: any = 0): Date | undefined {
    if(date) {
      return new Date(date.seconds * 1000)
    }
    return undefined
  }

}
