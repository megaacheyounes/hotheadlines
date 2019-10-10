import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { COUNTRIES } from '../../countries';
import { NewsService } from '../../services/news.service';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material';
import { CATEGORIES } from 'src/app/config/categories';
import { CATEGORY_ICON } from 'src/app/config/URLs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, AfterViewInit, OnDestroy {


  SIZE = 48;
  categoryNavVisible = false;
  selectedCategory = 'general';
  posts$;
  posts;
  loading = true;
  watcher: Subscription;
  activeMediaQuery = '';

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(public newsService: NewsService,
    private media: ObservableMedia) {

  }

  ngAfterViewInit() {
    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if (change.mqAlias === 'xs' || change.mqAlias === 'sm') {
        this.sidenav.mode = 'push';
      } else {
        this.sidenav.mode = 'side';
      }
    });
    this.sidenav.openedChange.subscribe(
      (open) => this.categoryNavVisible = open
    );

  }

  get categories() {
    return CATEGORIES;
  }

  getIcon(c) {
    return CATEGORY_ICON(c);
  }

  showNews(c, index) {
    this.selectedCategory = c;
    this.posts$ = this.newsService.getCategoryNews(c, index);

    this.sidenav.close();
  }

  change($event) {
    this.newsService.pagesize = $event.pageSize;
    this.showNews(this.selectedCategory, $event.pageIndex);
  }

  changePageSize(size) {
    this.newsService.pagesize = size;
  }


  ngOnInit() {
    this.showNews(this.selectedCategory, 0);
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }
}
