import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { SlideInAnimate, SlideOutAnimate, LineInAnimate } from '../animation/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('move', [
      transition(':enter', [
        useAnimation(SlideInAnimate)
      ]), transition(':leave', [
        useAnimation(SlideOutAnimate)
      ])
    ]),
    trigger('line', [
      transition(':enter', [
        useAnimation(LineInAnimate)
      ]), transition(':leave', [
        useAnimation(SlideOutAnimate)
      ])
    ])
  ]
})
export class ProductComponent implements OnInit {
  isShow = false;
  constructor() { }

  ngOnInit() {
  }
  show() {
    this.isShow = !this.isShow;
  }
}
