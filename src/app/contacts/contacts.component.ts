import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
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
