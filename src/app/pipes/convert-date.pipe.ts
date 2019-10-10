import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const millis1 = Date.parse(value);
    const millis = Date.now() - millis1;

    const millisInS = 1000;
    const millisInM = millisInS * 60;
    const millisInH = millisInM * 60;
    const millisInD = millisInH * 24;
    const millisInMO = millisInD * 30;

    if (millis < millisInS) {
      return 'now';
    } else if (millis < millisInM) {
      const mins = Math.floor(millis / millisInS);
      return mins + ' sec' + (mins > 1 ? 's' : '') + ' ago';
    } else if (millis < millisInH) {
      const mins = Math.floor(millis / millisInM);
      return mins + ' minute' + (mins > 1 ? 's' : '') + ' ago';
    } else if (millis < millisInD) {
      const mins = Math.floor(millis / millisInH);
      return mins + ' hour' + (mins > 1 ? 's' : '') + ' ago';
    }
    if (millis < millisInMO) {
      const mins = Math.floor(millis / millisInD);
      return mins + ' day' + (mins > 1 ? 's' : '') + ' ago';
    }
    const a: string = value;
    return a.substr(0, a.indexOf('T'));

  }

}
