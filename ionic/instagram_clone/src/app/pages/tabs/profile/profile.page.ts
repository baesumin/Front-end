import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  slideOpts = {};
  stories: any[] = [];
  buttonValue = 'grid';
  buttonItems: any[] = [];
  posts: any[] = [];

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
    this.buttonItems = [
      { value: 'grid', icon: 'grid' },
      { value: 'reels', icon: 'film' },
      { value: 'photos', icon: 'images' },
    ];
    this.posts = [
      { id: 1, url: 'assets/imgs/posts/1.jpg' },
      { id: 2, url: 'assets/imgs/posts/2.jpg' },
      { id: 3, url: 'assets/imgs/posts/3.jpg' },
      { id: 4, url: 'assets/imgs/posts/4.jpg' },
      { id: 5, url: 'assets/imgs/posts/5.jpg' },
      { id: 6, url: 'assets/imgs/posts/6.jpg' },
      { id: 7, url: 'assets/imgs/posts/1.jpg' },
      { id: 8, url: 'assets/imgs/posts/2.jpg' },
      { id: 9, url: 'assets/imgs/posts/3.jpg' },
    ];
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

  buttonsChanged(event) {
    console.log(event.detail.value);
    this.buttonValue = event.detail.value;
  }
}
