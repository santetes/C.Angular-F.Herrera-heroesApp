import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagenPipe',
})
export class ImagenPipe implements PipeTransform {
  /* transform(heroe: Heroe): string {
    if (!heroe.altImg) {
      if (heroe.id) {
        return 'assets/no-image.png';
      }
      return `assets/heroes/${heroe.id}.jpg`;
    } else if (heroe.altImg) {
      return heroe.altImg;
    }
    return 'assets/no-image.png';
  } */
  transform(heroe: Heroe): string {
    if (heroe.altImg) {
      return heroe.altImg;
    }
    if (heroe.id) {
      return `assets/heroes/${heroe.id}.jpg`;
    }
    return `assets/no-image.png`;
  }
}
