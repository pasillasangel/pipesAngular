import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(pass: string, bool: boolean = true): any {

    let newPass:string = '';

    if ( bool ) {
      for( let i of pass){
        newPass = newPass + "*";
      }
      return newPass;
    } else {
      return pass;
    }
  }

}
