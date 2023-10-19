import { Pipe, PipeTransform } from '@angular/core';
import { WlessPrepaid, WlinePrepaid } from '../module/wless-prepaid/WlessPrepaid';

@Pipe({
  name: 'filterWlineCategory'
})
export class FilterWlineCategoryPipe implements PipeTransform {

  transform(list: any[], cat:any) {
    if(cat=="Prepaid Plans")
    return list;
    else if(cat=="Postpaid Plans")
    return list;
    // return products.filter((pro)=>pro.pcategory==choice);
    else
    return list.filter((pro)=>pro.category==cat);
    // if(cat=="Annual")
    // {
    //   return list.filter((pro)=>pro.category==cat);
    // }
    // if(cat=="Semi-Annual")
    // {
    //   return list.filter((pro)=>pro.category==cat);
    // }
    // if(cat=="Quarterly")
    // {
    //   return list.filter((pro)=>pro.category==cat);
    // }
    // if(cat=="Monthly")
    // {
    //   return list.filter((pro)=>pro.category==cat);
    // }
    // else
    // {
    //   return null;
    // }
  }

}
