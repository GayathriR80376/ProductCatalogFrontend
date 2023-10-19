import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminNameFilter'
})
export class AdminNameFilterPipe implements PipeTransform {

  transform(list: any[], name: any) {

    return list.filter((pro)=>pro.adminName==name);
  }

}
