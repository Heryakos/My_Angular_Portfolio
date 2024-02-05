import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
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
export class ContactsComponent implements OnInit {
  isAnimated = false;

  constructor() {}

  ngOnInit(): void {}
  isScrollingUp = false;
  isScrollingDown = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      // Scrolling down
      this.isScrollingUp = true;
      this.isScrollingDown = false;
    } else {
      // Scrolling up
      this.isScrollingUp = false;
      this.isScrollingDown = true;
    }

    this.lastScrollTop = scrollTop;
  }
}
