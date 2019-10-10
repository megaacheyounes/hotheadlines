import { Component, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  watcher: Subscription;
  activeMediaQuery = '';
  @ViewChild('sidenav') sidenav;
  mode = 'side';

  constructor(private media: ObservableMedia) {

  }

  ngAfterViewInit() {
    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if (change.mqAlias === 'xs' || change.mqAlias === 'sm') {
        this.mode = 'over';
        this.sidenav.close();
      } else {
        this.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }


}
