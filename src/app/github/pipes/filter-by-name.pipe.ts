import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(repositories: Array<any>, query: string): Array<any> {
    if(!repositories) {
      return [];
    }
    return repositories
            .filter((repository) => repository.name.includes(query));
  }

}
