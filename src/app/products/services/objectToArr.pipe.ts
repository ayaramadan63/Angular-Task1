import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectToArr'
})
export class ObjectToArrPipe implements PipeTransform {

  transform(object: any =[]): any {
    return Object.values(object);
  }

}
