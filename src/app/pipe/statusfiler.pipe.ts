import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusfiler'
})
export class StatusfilerPipe implements PipeTransform {

  transform(list: any[], status:any) {
    
    return list.filter((pro)=>pro.status==status);
  }

}
