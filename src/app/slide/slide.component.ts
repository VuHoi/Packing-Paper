import { Component, OnInit, HostListener } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 20000, noPause: false, showIndicators: true } }
  ]
})
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    console.log(window.scrollY);
  }
}
