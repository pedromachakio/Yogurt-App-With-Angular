import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'ygr-list-of-news',
  templateUrl: './list-of-news.component.html',
  styleUrls: ['./list-of-news.component.scss'],
})
export class ListOfNewsComponent implements OnInit {
  listOfNews: any = [];

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.getListOfNews();
  }

  getListOfNews() {
    this.newsService.getNews().subscribe((newsList: any) => {
      this.listOfNews = newsList.data;
    });
  }
}
