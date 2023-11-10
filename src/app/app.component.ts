import { Component, ViewChild } from '@angular/core';
import { Share } from '@capacitor/share';


import {IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet) outlet;

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people-circle' },
    { title: 'Provincias', url: '/provincias', icon: 'location' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Scanner', url: '/scanner', icon: 'qr-code' }

  ];

  constructor(private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.outlet?.canGoBack()) {
        App.exitApp();
      }
    });

  }

  shareApp() {
    Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/'

    });
  }


}
