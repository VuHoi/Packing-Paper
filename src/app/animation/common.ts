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
        style({ width: '20px', offset: 0.0 }),
        style({ width: '100%', offset: 1 })
    ])));
export const LineOutAnimate = animation(
    animate('300ms linear', keyframes([
        style({ width: '100%', offset: 0.0 }),
        style({ width: '0px', offset: 1 })
    ])));
export const SlideInRightAnimate = animation(
    animate('300ms linear', keyframes([
        style({ transform: 'translate3d(100%, 0, 0)', visibility: 'visible', offset: 0.0 }),
        style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
    ])));

export const ZoomOutAnimate = animation(
    animate('300ms linear', keyframes([
        style({ opacity: 1, offset: 0.0 }),
        style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0.5 }),
        style({ opacity: 0, offset: 1 })
    ])));

export const ButtonOutAnimate = animation(
    animate('500ms linear', keyframes([
        style({ transform: 'scale3d(1.5, 1.5, 1.5)', offset: 1 })
    ])));

export const ButtonInAnimate = animation(
    animate('500ms linear', keyframes([
        style({ transform: 'scale3d(1.3, 1.3, 1.3)', offset: 0.0 }),
        style({ transform: 'scale3d(1, 1, 1)', offset: 1 }),
    ])));

export const slideInLeftAnimate = animation(
    animate('500ms linear', keyframes([
        style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'visible', offset: 0.0 }),
        style({ transform: 'translate3d(0, 0, 0)', offset: 1 }),
    ])));

export const slideOutLeftAnimate = animation(
    animate('300ms linear', keyframes([
        style({ transform: 'translate3d(0, 0, 0)', offset: 0 }),
        style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'visible', offset: 1 })
    ])));
