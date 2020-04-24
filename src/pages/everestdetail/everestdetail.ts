import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';

@IonicPage()
@Component({
  selector: 'page-everestdetail',
  templateUrl: 'everestdetail.html',
})
export class EverestdetailPage {
  cars:any=0;
    constructor(public navCtrl: NavController, public navParams: NavParams, public data: CarProvider) {
      console.log(navParams);
      var id = this.navParams.get('id');
      this.data.Ideverest(id).then(res=>{
        this.cars=res;
      });
    }
  
  
  } 