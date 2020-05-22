interface CoinJson {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  procent: number;
  description: string;
}

export class Coin {
  private _id: number;

  constructor(
    private _name: string,
    private _symbol: string,
    private _logo: string,
    private _price: number,
    private _procent: number,
    private _description: string
  ) {}

  static fromJSON(json: CoinJson): Coin {
    const c = new Coin(
      json.name,json.symbol, json.logo, json.price, json.procent, json.description
    );
    c._id = json.id;
    return c;
  }

  toJSON(): CoinJson {
    return <CoinJson>{
      name: this.name,
      symbol:this.symbol,
      logo:this.logo,
      price:this.price,
      procent:this.procent,
      description:this.description
    };
  }

  get id(): number {
    return this._id;
  }
  get name(): string{
    return this._name;
  }
  get symbol(): string{
    return this._symbol;
  }
  get logo(): string{
    return this._logo;
  }
  get price() :number{
    return this._price;
  }
  get procent(): number{
    return this._procent;
  }
  get description(): string{
    return this._description;
  }

}
