import { Component, OnInit } from '@angular/core';
import { CarouselService } from 'src/app/services/carousel.service';
import { Slideshow } from 'src/app/services/models/slideshow';

@Component({
  selector: 'ygr-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  images: Slideshow = [];

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
    this.getCarouselImages();
  }

  getCarouselImages() {
    this.carouselService.getCarouselImages().subscribe((images: Slideshow) => {
      this.images = images;
    });
  }

  getImageName(image: string) {
    return image.split('/')[image.split('/').length - 1];
  }
}
