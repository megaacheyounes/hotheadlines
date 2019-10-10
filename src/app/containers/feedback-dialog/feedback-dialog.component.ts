import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Feedback } from 'src/app/classes/Feedback';

@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss']
})
export class FeedbackDialogComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  model = new Feedback();

  config: MatSnackBarConfig = new MatSnackBarConfig();
  DURATION = 2000; // 2s

  constructor(public dialogRef: MatDialogRef<FeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private feedbackService: FeedbackService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.config.duration = this.DURATION;
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  send($event) {
    if ($event)
      $event.preventDefault();

    this.feedbackService.send(this.model).subscribe(
      (data) => this.feedbackSent()
      , (error) => this.feedbackFailedToSend());
  }

  feedbackSent() {
    this.dialogRef.close();
    this.snackBar.open('feedback was sent successfully', null, this.config);
  }

  feedbackFailedToSend() {
    this.snackBar.open('failed to send feedback', null, this.config);
  }

}


