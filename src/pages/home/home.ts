import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EverestPage } from '../everest/everest';
import { RangerPage } from '../ranger/ranger';
import { PromotionPage } from '../promotion/promotion';
import { RaptorPage } from '../raptor/raptor';
import { InnovationPage } from '../innovation/innovation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  goToEverestPage(){
    this.navCtrl.push(EverestPage);
  }

    goToRangerPage(){
    this.navCtrl.push(RangerPage);
   }

    goToPromotionPage(){
    this.navCtrl.push(PromotionPage);
     }

    
    goToRaptorPage(){
    this.navCtrl.push(RaptorPage);
     }

     goToInnovationPage(){
      this.navCtrl.push(InnovationPage);
       }




}
