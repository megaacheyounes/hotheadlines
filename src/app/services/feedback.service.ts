import { Injectable } from '@angular/core';
import { FEEDBACK_URL } from '../config/URLs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(
    private httpClient: HttpClient) { }


  send(feedback) {
    return this.httpClient.post(this.feedbackUrl, feedback);
  }

  get feedbackUrl() {
    return FEEDBACK_URL;
  }

}
