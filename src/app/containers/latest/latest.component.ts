import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subject } from 'rxjs';
import { dummy } from '../../dummy';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss']
})

export class LatestComponent implements OnInit {

  loading = false;

  posts$: Subject<any>;

  images = [];

  @ViewChild('mainContent') mainContent;

  constructor(public newsService: NewsService) { }

  ngOnInit() {
    this.getPosts(0);
  }

  setBSImages(data) {

    for (const post of data.articles) {
      this.images.push({
        url: post.urlToImage,
        href: post.url
      });
    }

  }

  change($event) {
    this.newsService.pagesize = $event.pageSize;
    this.getPosts($event.pageIndex);
  }

  getPosts(index) {
    this.posts$ = this.newsService.getLatest(index);
  }

  changePageSize(size) {
    this.newsService.pagesize = size;
  }


}
