import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  @ViewChild('tabs') tabs: IonTabs;
  selectTab: any;

  constructor() {}

  ngOnInit() {}

  setCurrentTab(event) {
    console.log(event);
    this.selectTab = this.tabs.getSelected();
  }
}
