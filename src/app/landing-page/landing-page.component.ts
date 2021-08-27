import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'ygr-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  listOfNews: any = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getListOfNewsBySize();
  }

  getListOfNewsBySize() {
    this.newsService.getNewsBySize(3).subscribe((news: any) => {
      this.listOfNews = news.data;
    });
  }
}
