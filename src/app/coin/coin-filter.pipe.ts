import { Pipe, PipeTransform } from '@angular/core';
import {Coin} from '../coin/coin.model';

@Pipe({
  name: 'coinFilter'
})
export class CoinFilterPipe implements PipeTransform {

  transform(coins: Coin[], name: string): Coin[] {
    if (!name || name.length === 0) {
      return coins;
    }
    return coins.filter(c =>
      c.name.toLowerCase().startsWith(name.toLowerCase())
    );
  }
}
