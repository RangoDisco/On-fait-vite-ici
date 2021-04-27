import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
private articlesService: HttpClient
public userCart: Article[]
  constructor(param_service: HttpClient,) {
    this.articlesService = param_service
    this.userCart = []
   }
  getArticles(): Observable<Article[]>{
    const articlesListObs: Observable<any> = this.articlesService.get('assets/articles.json')
    const treatment = (articlesList: Article[]) => {
      return articlesList as Article[];
    }
    return articlesListObs.pipe(map(treatment))

  }
addArticleToPanier(article: Article, articlesList: Article[]){
articlesList.splice(articlesList.indexOf(article), 1)
this.userCart.push(article)
}
deleteFromCart(article: Article, userCart: Article[]){
  userCart.splice(userCart.indexOf(article), 1)
}
}
