import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slideshow } from './models/slideshow';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private ROOT = 'http://localhost:3000/api';

  constructor(private httpService: HttpClient) {}

  getCarouselImages(): Observable<Slideshow> {
    return this.httpService.get<Slideshow>(this.ROOT + '/slideshow'); // string array
  }
}
