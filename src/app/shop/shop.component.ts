import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article';
import { ArticlesService } from '../common/articles.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
public articles: Article[];
public articlesService: ArticlesService;
  constructor(param_service: ArticlesService) { 
    this.articlesService = param_service
  }

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe((articles: Article[]) => {
      this.articles = articles
    })
  }

  addToCart(article:Article, articlesList: Article[]){
    this.articlesService.addArticleToPanier(article, articlesList)
  }

}
