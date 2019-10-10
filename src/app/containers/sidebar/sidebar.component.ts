import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: []
})
export class SidebarComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }
  // ,
  search($event) {

  }

  facebook() {

  }

  twitter() {

  }


  feedback() {
    const config = new MatDialogConfig();
    config.width = '600px';
    this.matDialog.open(FeedbackDialogComponent, config);
  }


  get personalWebsite() {
    return environment.personalWebsite;
  }

}
