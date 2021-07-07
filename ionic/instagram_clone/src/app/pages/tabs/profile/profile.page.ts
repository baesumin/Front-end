import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  slideOpts = {};
  stories: any[] = [];

  constructor() {}

  ngOnInit() {
    this.stories = [
      { name: 'New' },
      { name: 'Android', src: 'assets/imgs/1.jpg' },
      { name: 'Angular', src: 'assets/imgs/1.jpg' },
      { name: 'Ionic', src: 'assets/imgs/1.jpg' },
      { name: 'Nodejs', src: 'assets/imgs/1.jpg' },
      { name: 'iOS', src: 'assets/imgs/1.jpg' },
      { name: 'php', src: 'assets/imgs/1.jpg' },
    ];
    this.slideOpts = {
      slidesPerView: this.checkScreen(),
      slideShadows: true,
    };
  }

  checkScreen() {
    const innerWidth = window.innerWidth;
    switch (true) {
      case 340 > innerWidth:
        return this.checkLength(5.5);
      case 340 <= innerWidth && innerWidth <= 400:
        return this.checkLength(6.5);
      case 401 <= innerWidth && innerWidth <= 700:
        return this.checkLength(7.5);
      case 701 <= innerWidth && innerWidth <= 900:
        return this.checkLength(8.5);
      case 901 <= innerWidth:
        return this.checkLength(9.5);
    }
  }

  checkLength(val) {
    const length = this.stories.length;
    return val < length ? val : length;
  }
}
