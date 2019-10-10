import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-cover-main',
  templateUrl: './post-cover-main.component.html',
  styleUrls: ['./post-cover-main.component.scss']
})
export class PostCoverMainComponent implements OnInit {


  @Input() post;

  constructor() { }

  postclicked() {
    this.readMore();
  }

  readMore() {
    window.open(this.post.url, '_blank');
  }

  ngOnInit() {
  }

}
