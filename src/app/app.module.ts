import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { PostCoverMainComponent } from './presenters/post-cover-main/post-cover-main.component';
import { NoContentComponent } from './pages/no-content/no-content.component';
import { SearchBarComponent } from './presenters/search-bar/search-bar.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';
import { NewsService } from './services/news.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ConvertDatePipe } from './pipes/convert-date.pipe';
import { CountriesComponent } from './containers/countries/countries.component';
import { LatestComponent } from './containers/latest/latest.component';
import { SearchComponent } from './containers/search/search.component';
import { CategoryComponent } from './containers/category/category.component';
import { FeedbackDialogComponent } from './containers/feedback-dialog/feedback-dialog.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PostCoverMainComponent,
    NoContentComponent,
    SearchBarComponent,
    SidebarComponent,
    ConvertDatePipe,
    CountriesComponent,
    LatestComponent,
    SearchComponent,
    CategoryComponent,
    FeedbackDialogComponent,
  ],
  imports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    MatDividerModule,
    //NgMatSearchBarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSelectModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    BrowserModule,
    MatInputModule,
    HttpClientModule,
    MatListModule,
    MatTooltipModule,
    MatToolbarModule,
    FormsModule,
    PerfectScrollbarModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules }),
  ],
  entryComponents: [FeedbackDialogComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [NewsService, FormBuilder, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }, MatDialog,
    HttpClient,
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
