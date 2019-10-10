import { Routes } from '@angular/router';
// import { angularProfileCard } from '../../components/main-profile/index';

import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { NoContentComponent } from './pages/no-content/no-content.component';
import { HomeComponent } from './pages/home/home.component';
import { CountriesComponent } from './containers/countries/countries.component';
import { LatestComponent } from './containers/latest/latest.component';
import { SearchComponent } from './containers/search/search.component';
import { CategoryComponent } from './containers/category/category.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'trending', pathMatch: 'full' },
  { path: 'trending', component: HomeComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'local', component: CountriesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'special', component: CategoryComponent },
  { path: '**', component: NoContentComponent },
];
