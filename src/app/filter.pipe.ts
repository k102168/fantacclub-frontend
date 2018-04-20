import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(heroes: any, term: any): any {
    if(term=== undefined)return heroes;
  
return heroes.filter(function(ninja){
  
    return ninja.name.toLowerCase().includes(term.toLowerCase());
})
}

}
