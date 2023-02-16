import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'descricaoReduzida',
})
export class DescricaoReduzida implements PipeTransform {
  transform(text: string, truncaEm: number): string {
    if (text.length > truncaEm) {
      return text.substring(0, truncaEm) + '...';
    }
    return text;
  }
}
