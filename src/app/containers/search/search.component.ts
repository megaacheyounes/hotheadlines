import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  index = 0;
  q;
  watcher: Subscription;
  posts$;
  constructor(private _route: ActivatedRoute, public newsService: NewsService) { }


  ngOnInit() {//router/search?q=sdsdsdsdd&ze=zeze
    this.watcher = this._route.queryParams.subscribe((value) => this.search(this.q = value['q'], this.index = 0));
  }

  search(q, index) {
    this.posts$ = this.newsService.search(q, index);
    this.posts$.subscribe();
  }

  change($event) {
    this.newsService.pagesize = $event.pageSize;
    this.index = $event.pageIndex;
    this.search(this.q, this.index);
  }

  changePageSize(size) {
    this.newsService.pagesize = size;
  }


  ngOnDestroy() {
    this.watcher.unsubscribe();
  }


}
