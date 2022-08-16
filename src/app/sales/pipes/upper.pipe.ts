import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'upper'
})

export class UpperPipe implements PipeTransform {

  transform( value: string, mayus: boolean = true ): string {

   return ( mayus )
   ? value.toUpperCase()
   : value.toLowerCase()

  }

}
