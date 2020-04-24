import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { Toast } from '@ionic-native/toast';



@IonicPage()
@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {
  text:any;
  format:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private scr:Screenshot, private toast:Toast) {
  }

  capture(){
    this.scr.save('jpg',80,'captured.jpg')
      .then(
        (result)=>{
        this.toast.show("Capture success","2000","top")
          .subscribe(); 
        },
        (result)=>{
        this.toast.show("Capture error","2000","bottom")
          .subscribe();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PromotionPage');
  }

}
