import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detailnews',
  templateUrl: 'detailnews.html',
})
export class DetailnewsPage {
  item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailnewsPage');
  }

}
