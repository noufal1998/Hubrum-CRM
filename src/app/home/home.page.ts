import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private iab: InAppBrowser
  ) {}

  ionViewDidEnter(){
  //  const browser = this.iab.create('http://saasfoxtrot.varuscreative.com/601958cfd6a05/invoices/125/details','_self',{location:'no'}); 

  }

}
