import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() title: string;
  @Input() rate: string;
  @Input() price: string;
  @Input() image: string;
  @Input() color: string;
  max = 5;
  isReadonly = true;
  constructor() { }

  ngOnInit() {
  }

}
