import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  query;

  constructor(private router: Router) { }

  search() {
    this.router.navigate(['/search'], { queryParams: { q: this.query } });
  }

  ngOnInit() {
  }

}
