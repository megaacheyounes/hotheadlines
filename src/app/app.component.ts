import { Component, ViewChild, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {

  watcher: Subscription;

  @ViewChild('sidenav') sidenav;
  mode = 'side';

  constructor(private media: ObservableMedia) {

  }

  ngOnInit() {
    this.watcher = this.media.subscribe((change: MediaChange) => {
      //  this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      if (change.mqAlias === 'xs' || change.mqAlias === 'sm') {
        this.mode = 'over';
        this.sidenav.close();
      } else {
        this.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  ngAfterViewInit() {


  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }


}
