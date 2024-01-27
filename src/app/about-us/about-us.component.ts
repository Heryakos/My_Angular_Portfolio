import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  progressValues: any = {
    html: 100,
    css: 100,
    javascript: 80,
    typescript: 60,
    angular: 80,
    react: 60,
  };

  ngOnInit(): void {
    this.startProgressAnimation();
  }

  startProgressAnimation(): void {
    // Delay the start of each animation for a smooth effect
    setTimeout(() => {
      this.progressValues.html = 100;
    }, 200);

    setTimeout(() => {
      this.progressValues.css = 100;
    }, 400);

    setTimeout(() => {
      this.progressValues.javascript = 80;
    }, 600);

    setTimeout(() => {
      this.progressValues.typescript = 60;
    }, 800);

    setTimeout(() => {
      this.progressValues.angular = 80;
    }, 1000);

    setTimeout(() => {
      this.progressValues.react = 60;
    }, 1200);
  }
}
