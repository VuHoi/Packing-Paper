import { animate, animation, style, keyframes } from '@angular/animations';


export const SlideInAnimate = animation(
    animate('1000ms linear', keyframes([
        style({ opacity: 0, transform: 'translate3d(300px, 0, 0)', offset: 0.0 }),
        style({ opacity: 0, transform: 'translate3d(300px, 0, 0)', offset: 0.2 }),
        style({ opacity: 1, transform: 'translate3d(-25px, 0, 0)', offset: 0.6 }),
        style({ opacity: 1, transform: 'translate3d(10px, 0, 0)', offset: 0.75 }),
        style({ opacity: 1, transform: 'translate3d(-5px, 0, 0)', offset: 0.9 }),
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
    ])));

export const SlideOutAnimate = animation(
    animate('500ms linear', keyframes([
        style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0.0 }),
        style({ opacity: 0, transform: 'translate3d(-300px, 0, 0)', offset: 1 })
    ])));

export const LineInAnimate = animation(
    animate('300ms linear', keyframes([
        style({  width: '20px', offset: 0.0 }),
        style({   width: '80px', offset: 1 })
    ])));





