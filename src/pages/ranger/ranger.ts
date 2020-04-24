import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';
import { RangerdetailPage } from '../../pages/rangerdetail/rangerdetail';

@IonicPage()
@Component({
  selector: 'page-ranger',
  templateUrl: 'ranger.html',
})
export class RangerPage {
  ranger : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:CarProvider) {
    this.data.loadranger().then(result=>{
      this.ranger=result;
      console.log(result);
    });
  }

  
  showDetal(id){
    this.navCtrl.push(RangerdetailPage,{code:id});
  }




  goToRangerdetailPage(cars_id:any){
   
    this.navCtrl.push(RangerdetailPage,{ id:cars_id });
  }

}