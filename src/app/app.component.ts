import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private iab: InAppBrowser,
    public platform: Platform,
    public splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp()
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
      this.statusBar.styleDefault();
      const browser = this.iab.create('http://offersjoin.com/CRM/admin','_self',{location:'no'}); 
    });
  }
}
