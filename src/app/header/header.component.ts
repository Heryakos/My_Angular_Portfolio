import { Component, OnInit, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  languageFormControl = new FormControl('en');

  changeLanguage(language: string) {
    this.languageFormControl.setValue(language);
  }
  isMenuOpen = false;

  isScrolled = false;
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isScrolled = st > this.lastScrollTop && st > 0;
    this.lastScrollTop = st;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
