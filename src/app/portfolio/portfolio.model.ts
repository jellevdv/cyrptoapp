import { PortCoin } from '../portfolio/portfcoin.model';

interface PortfolioJSON {
  id: number;
  name: string;
  coinsOfPortfolio: PortCoin[];
  totalValue: number;
}

export class Portfolio {
  private _id: number;
  private _totalValue: number;

  constructor(
    private _name: string
  ) {
  }

  static fromJSON(json: PortfolioJSON): Portfolio {
    const portfolio = new Portfolio(
      json.name
    );
    portfolio._id = json.id;
    return portfolio;
  }

  get id(): number {
    return this._id;
  }
  get name(): string{
    return this._name;
  }

  get totalValue(): number{
    return this._totalValue;
  }


}
