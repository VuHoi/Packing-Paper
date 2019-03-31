import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { SlideInAnimate, SlideOutAnimate, LineInAnimate, LineOutAnimate } from '../animation/common';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SharedService } from '../shareService';
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
        useAnimation(LineOutAnimate)
      ])
    ])
  ]
})
export class ProductComponent implements OnInit {
  isDumpling = true;
  isBread = false;
  isMedicine = false;
  selected = 'dumpling';
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private shareService: SharedService) {
    this.shareService.getproduct().subscribe((category) => {
      this.selectTab(category);
      this.leaveTab();
    });
  }

  ngOnInit() {
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (this.isDumpling) {
          this.isBread = true;
          this.isDumpling = false;
          this.selected = 'bread';
        } else
          if (this.isBread) {
            this.isBread = false;
            this.isMedicine = true;
            this.selected = 'medicine';
          } else {
            this.isMedicine = false;
            this.isDumpling = true;
            this.selected = 'dumpling';
          }
      });
  }
  show(category: string) {
    if (this.selected === category) {
      return;
    }
    if (this.selected === 'dumpling') {
      this.isBread = false;
      this.isMedicine = false;
    } else
      if (this.selected === 'bread') {
        this.isDumpling = false;
        this.isMedicine = false;
      } else
        if (this.selected === 'medicine') {
          this.isDumpling = false;
          this.isBread = false;
        }

    if (category === 'dumpling') {
      this.isDumpling = true;
    } else
      if (category === 'bread') {
        this.isBread = true;
      } else
        if (category === 'medicine') {
          this.isMedicine = true;
        }
  }

  selectTab(category: string) {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.selected = category;
    if (category === 'dumpling') {
      this.isDumpling = true;
    } else
      if (category === 'bread') {
        this.isBread = true;
      } else
        if (category === 'medicine') {
          this.isMedicine = true;
        }
  }

  leaveTab() {
    if (this.selected === 'dumpling') {
      this.isBread = false;
      this.isMedicine = false;
    } else
      if (this.selected === 'bread') {
        this.isDumpling = false;
        this.isMedicine = false;
      } else
        if (this.selected === 'medicine') {
          this.isDumpling = false;
          this.isBread = false;
        }
  }
}
