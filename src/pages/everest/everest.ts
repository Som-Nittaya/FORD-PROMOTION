import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';
import { EverestdetailPage } from '../../pages/everestdetail/everestdetail';


@IonicPage()
@Component({
  selector: 'page-everest',
  templateUrl: 'everest.html',
})
export class EverestPage {
  everest : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public data:CarProvider) {
    this.data.loadeverest().then(result=>{
      this.everest=result;
      console.log(result);
    });
  }

  
  showDetal(id){
    this.navCtrl.push(EverestdetailPage,{code:id});
  }




  goToEverestdetailPage(cars_id:any){
   
    this.navCtrl.push(EverestdetailPage,{ id:cars_id });
  }

}