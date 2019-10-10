import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subject, Subscription } from 'rxjs';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
//import { CarouselCell } from '../../banner-slider/banner-slider.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  loading = false;

  posts$: Subject<any>;
  posts;
  //images: CarouselCell[] = [];
  @ViewChild(PerfectScrollbarDirective) perfectScrollbar?: PerfectScrollbarDirective;
  @ViewChild('mainContent') mainContent;
  watcher: Subscription;

  constructor(public newsService: NewsService) { }

  ngOnInit() {

    this.loadPosts(0);
    /* this.watcher = this.posts$.subscribe(
      (posts) => this.setBSImages(posts)
    );
     */
  }

  setBSImages(data) {

    /*    for (const post of data.articles) {
         this.images.push({
           image: post.urlToImage,
           postUrl: post.url,
           title: post.title
         });
       } */
  }

  loadPosts(index) {
    this.posts$ = this.newsService.getTop(index);
  }

  change($event) {
    this.newsService.pagesize = $event.pageSize;
    this.loadPosts($event.pageIndex);
  }



  changePageSize(size) {
    this.newsService.pagesize = size;
  }


  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}


