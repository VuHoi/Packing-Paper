import { Component, OnInit, HostListener } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { trigger, transition, useAnimation } from '@angular/animations';
import { SlideInRightAnimate, ZoomOutAnimate, ButtonOutAnimate, ButtonInAnimate } from '../animation/common';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 15000, noPause: true, showIndicators: true } }
  ],
  animations: [
    trigger('slide', [
      transition('leave=>enter', [
        useAnimation(SlideInRightAnimate)
      ])
    ]),
    trigger('button', [
      transition('leave=>enter', [
        useAnimation(ButtonOutAnimate)
      ]),
      transition('enter=>leave', [
        useAnimation(ButtonInAnimate)
      ])
    ])
  ]
})
export class SlideComponent implements OnInit {
  isScroll = false;
  urlImage = '/assets/images/white-paper.png';
  isCollapsed = true;
  stateAnim = 'leave';
  redAnim = 'leave';
  yellowAnim = 'leave';
  greenAnim = 'leave';
  destroy$: Subject<boolean> = new Subject<boolean>();
  selectedPage1 = 'white';
  constructor() { }

  ngOnInit() {
    let time = 0;
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        time++;
        if (time !== 4 && time !== 5 && time !== 7 && time !== 8) {
          let color = 'white';
          if (this.selectedPage1 === 'white') {
            this.selectedPage1 = 'yellow';
            color = 'yellow';
            this.yellowAnim = 'enter';
          } else if (this.selectedPage1 === 'yellow') {
            this.selectedPage1 = 'red';
            color = 'red';
            this.redAnim = 'enter';
          } else if (this.selectedPage1 === 'red') {
            this.selectedPage1 = 'white';
            color = 'white';
            this.greenAnim = 'enter';
          }
          this.urlImage = `/assets/images/${color}-paper.png`;
          this.stateAnim = 'enter';
          setTimeout(() => {
            this.stateAnim = 'leave';
            this.redAnim = 'leave';
            this.yellowAnim = 'leave';
            this.greenAnim = 'leave';
          }, 300);
        }
        if (time === 8) {
          time = 0;
        }
      });
  }



  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY > 0) {
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }

  changeImage(color: string) {
    this.urlImage = `/assets/images/${color}-paper.png`;
    if (color === 'red') {
      this.redAnim = 'enter';
    } else
      if (color === 'yellow') {
        this.yellowAnim = 'enter';
      } else
        if (color === 'white') {
          this.greenAnim = 'enter';
        }
    this.stateAnim = 'enter';
    setTimeout(() => {
      this.stateAnim = 'leave';
      this.redAnim = 'leave';
      this.yellowAnim = 'leave';
      this.greenAnim = 'leave';
    }, 300);
  }

}
