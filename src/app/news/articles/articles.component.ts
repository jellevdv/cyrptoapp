import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../news-data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private _data: NewsDataService) { }

  ngOnInit(): void {}


}
