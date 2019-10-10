import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { COUNTRIES } from '../../countries';
import { NewsService } from '../../services/news.service';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material';
import { COUNTRIES_CODES } from 'src/app/config/countriesCodes';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, AfterViewInit, OnDestroy {



  SIZE = 48;
  countries = [];
  countryNavVisible = false;
  selectedCountry = {
    name: 'usa',
    code: 'us'
  };
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
      (open) => this.countryNavVisible = open
    );

  }

  get accepted() {
    return COUNTRIES_CODES;
  }

  getFlag(c) {
    return 'http://www.countryflags.io/' + c.code + '/shiny/' + this.SIZE + '.png';
  }

  showNews(c, index) {
    this.selectedCountry = c;
    this.posts$ = this.newsService.getCountryNews(c.code, index);

    this.sidenav.close();
  }

  change($event) {
    this.newsService.pagesize = $event.pageSize;
    this.showNews(this.selectedCountry, $event.pageIndex);
  }

  changePageSize(size) {
    this.newsService.pagesize = size;
  }


  ngOnInit() {
    for (const country of COUNTRIES) {
      const cc = country.code.toLocaleLowerCase();
      const i = this.accepted.indexOf(cc);

      if (i !== -1) {
        this.countries.push(country);
      }

    }
    this.showNews(this.selectedCountry, 0);
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
