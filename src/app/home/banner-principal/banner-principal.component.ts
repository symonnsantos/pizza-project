import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbSlideEventSource, NgbSlideEvent, NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner-principal',
  templateUrl: './banner-principal.component.html',
  styleUrls: ['./banner-principal.component.css']
})
export class BannerPrincipalComponent implements OnInit {

  //images = [1, 2, 3, 4, 5, 6, 7].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  i: number = 0;
  //images = [1, 2, 3].map(() => `../../../assets/banner0${this.images}.jpg`);
  images = ['../../../assets/banner01.jpg',
    '../../../assets/banner02.jpg',
    '../../../assets/banner03.jpg'];

  paused: boolean = false;
  unpauseOnArrow: boolean = false;
  pauseOnIndicator: boolean = false;
  pauseOnHover: boolean = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;


  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }


  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  ngOnInit() {
    this.paused = false;
    this.unpauseOnArrow = false;
    this.pauseOnIndicator = false;
    this.pauseOnHover = true;
  }

}
