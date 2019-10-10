import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CONFIG } from '../../config/config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() sidenav;
  menu: boolean;

  constructor(public newsService: NewsService) { }

  toggleMenu() {
    this.menu = !this.menu;
  }

  get logo() {
    return CONFIG.logo;
  }

  get loading() {
    return this.newsService.loading;
  }

  ngOnInit() {
  }

}
