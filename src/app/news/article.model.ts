interface ArticleJSON {
  source: object;
  author: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  content:string;
}

export class Article {
  private _source:object;

  constructor(
   private _author: string,
   private _title: string,
   private _description: string,
   private _url: string,
   private _publishedAt: string,
   private _content:string,
  ) {}

  static fromJSON(json: ArticleJSON): Article {
    const c = new Article(
     json.author, json.title, json.description, json.url, json.publishedAt,json.content
    );
    c._source = json.source;
    return c;
  }

  get source(): object{
    return this._source;
  }
  get author():string{
    return this._author;
  }
  get title(): string{
    return this._title;
  }

  get description(): string{
    return this._description;
  }

  get url(): string{
    return this._url;
  }
  get  publishedAt(): string{
    return this._publishedAt;
  }

  get content():string{
    return this._content;
  }



}

