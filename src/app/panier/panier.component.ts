import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article';
import { ArticlesService } from '../common/articles.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  public articlesService: ArticlesService;
public userCart: Article[]
constructor(param_service: ArticlesService) { 
  this.articlesService = param_service
}

  ngOnInit(): void {
    this.userCart = this.articlesService.userCart
  }
deleteFromCart(article: Article, userCart: Article[]){
  this.articlesService.deleteFromCart(article, userCart)
}
}
