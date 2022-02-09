import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFix'
})
export class DateFixPipe implements PipeTransform {

  transform(date: any = 0): number {
    if(date) {
      let newDate = date.toDate();
      return newDate.getTime();
    }
    return 0; 
  }

}
