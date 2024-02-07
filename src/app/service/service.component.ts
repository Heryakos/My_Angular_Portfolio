import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate(
          '500ms ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class ServiceComponent implements OnInit {
  isAnimated = false;
  isCardHovered = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isAnimated = true;
    }, 500);
  }

  handleCardHover(isHovered: boolean): void {
    this.isCardHovered = isHovered;
  }
}
