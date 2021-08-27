import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/services/models/news';

@Component({
  selector: 'ygr-individual-news',
  templateUrl: './individual-news.component.html',
  styleUrls: ['./individual-news.component.scss'],
})
export class IndividualNewsComponent implements OnInit {
  individualNews: News = {
    id: '',
    title: '',
    date: 0,
    description: '',
    content: '',
    imgPath: '',
  };
  id: any;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.getActivatedRoute();
    this.getNewsById();
  }

  ngOnInit(): void {}

  getActivatedRoute() {
    this.id = this.route.params.subscribe((response: any) => {
      this.id = response['id'];
      this.getNewsById();
    });
  }

  getNewsById() {
    this.newsService.getNewsById(this.id).subscribe((response: any) => {
      this.individualNews = response.data[0];
    });
  }
}
