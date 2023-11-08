import { Component } from '@angular/core';
import { Share } from '@capacitor/share';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people-circle' },
    { title: 'Provincias', url: '/provincias', icon: 'location' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Scanner', url: '/scanner', icon: 'qr-code' }
    
  ];
  
  constructor(

  ) {}

  shareApp(){
    Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/'

    });

  }


}
