import { Portfolio } from '../portfolio/portfolio.model';
import { Coin } from '../coin/coin.model';


interface PortCoinJSON {
  id: number;
  portfolio: Portfolio;
  coin: Coin;
  amount: number;

}

export class PortCoin {
  private _id: number;

  constructor(
    private _portfolio: Portfolio,
    private _coin: Coin,
    private _amount: number
  ) {}

  static fromJSON(json: PortCoinJSON): PortCoin {
    const portcoin = new PortCoin(
      json.portfolio, json.coin, json.amount
    );
    portcoin._id = json.id;
    return portcoin;
  }

  get id(): number {
    return this._id;
  }
  get portfolio(): Portfolio{
    return this._portfolio;
  }
  get coin(): Coin{
    return this._coin;
  }
  get amount(): number{
    return this._amount;
  }


}
