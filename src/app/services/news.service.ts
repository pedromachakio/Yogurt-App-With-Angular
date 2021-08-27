import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from './models/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private ROOT = 'http://localhost:3000/api/posts';
  constructor(private httpService: HttpClient) {}

  getNews() {
    return this.httpService.get<News>(this.ROOT); // array of News Objects
  }

  getNewsBySize(size: number) {
    return this.httpService.get<News>(this.ROOT + '?size=' + size);
    //concatenaçao de string com ROOT para obter o tamanho pretendido (por exemplo 3 para a home)
  }

  getNewsById(id: string) {
    return this.httpService.get<News>(this.ROOT + '/' + id);
  }
}
