import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SendFormService {
  private ROOT = 'http://localhost:3000/api/contact';

  constructor(private httpService: HttpClient) {}

  postUserForm(userPost: {}) {
    return this.httpService.post(this.ROOT, userPost);
  }
}
