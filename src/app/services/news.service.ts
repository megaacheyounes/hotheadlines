import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { EVERYTHING_URL, TOP_HEADLINES_URL, DEFAULTS, QUERY_PARAMS } from '../config/URLs';



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  PAGE_SIZE = QUERY_PARAMS.PAGE_SIZE;
  PAGE = QUERY_PARAMS.PAGE;

  pagesize = 10;
  public loading;

  LANGS = 'en';

  constructor(private http: HttpClient) { }

  treat(s) {
    this.itsLoading();
    //return s;/*
    const removePostsWithoutImage = (response) => {
      const posts: any[] = response.articles;
      let removed = 0;
      for (const post of posts) {
        if (!post.urlToImage) {
          posts.slice(posts.indexOf(post), 1);
          removed++;
        }
      }
      return response;
    };
    return s.pipe(tap(a => this.notLoading(a)), map((response) => removePostsWithoutImage(response)));
    /* pipe(
      map((data: Response) => {
        this.notLoading();
      }, (error) => {
        console.dir(error);
        this.notLoading();
      })
    );*/
  }

  getValidIndex(index) {

    return index + 1;
    //return index < 1 ? 1 : index;
  }

  getTop(index) {
    const url = TOP_HEADLINES_URL + '&' + DEFAULTS.SOURCES + '&' + this.getPageSizeParam() + '&' + this.getPageParam(index);

    return this.treat(this.http.get(url));
  }

  getLatest(index) {
    const url = EVERYTHING_URL + '&' + DEFAULTS.SOURCES + '&' + DEFAULTS.LATEST + '&' + this.getPageSizeParam() + '&' + this.getPageParam(index);

    return this.treat(this.http.get(url));
  }

  getCategoryNews(category, index) {
    const url = TOP_HEADLINES_URL + '&' + this.getCategoryParam(category) + '&' + this.getPageSizeParam() + '&' + this.getPageParam(index);
    return this.treat(this.http.get(url));
  }

  search(query, index) {
    const url = EVERYTHING_URL + '&' + this.getSearchParam(query) + '&' + this.getPageSizeParam() + '&' + this.getPageParam(index);
    console.log(url);
    return this.treat(this.http.get(url));
  }

  getCountryNews(country, index) {
    const url = TOP_HEADLINES_URL + '&' + this.getCountryParam(country) + '&' + this.getPageSizeParam() + '&' + this.getPageParam(index);
    return this.treat(this.http.get(url));
  }

  itsLoading() {
    this.loading = true;
  }

  notLoading(a) {
    console.log(a);

    this.loading = false;
  }


  /***** url construction helper functions */

  getPageParam(index) {
    return QUERY_PARAMS.PAGE + '=' + this.getValidIndex(index);
  }

  getPageSizeParam() {
    return QUERY_PARAMS.PAGE_SIZE + '=' + this.pagesize;
  }

  getSearchParam(q) {
    return QUERY_PARAMS.SEARCH + '=' + q;
  }

  getCategoryParam(category) {
    return QUERY_PARAMS.CATEGORY + '=' + category;
  }

  getCountryParam(country) {
    return QUERY_PARAMS.COUNTRY + '=' + country;
  }


}
