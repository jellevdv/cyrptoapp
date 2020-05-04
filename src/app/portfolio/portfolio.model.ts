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
  private _coinsOfPortfolio: PortCoin[];

  constructor(
    private _name: string
  ) {
  }

  static fromJSON(json: PortfolioJSON): Portfolio {
    const portfolio = new Portfolio(
      json.name
    );
    portfolio._id = json.id;
    portfolio._coinsOfPortfolio=json.coinsOfPortfolio;
    return portfolio;
  }

  toJSON(): PortfolioJSON {
    return <PortfolioJSON>{
      name: this.name,
      totalValue: this._totalValue,
      coinsOfPortfolio: this._coinsOfPortfolio
    };
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

  get coinsOfPortfolio(): PortCoin[]{
    return this._coinsOfPortfolio;
  }


}
