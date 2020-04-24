import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EverestPage } from '../everest/everest';
import { RangerPage  } from '../ranger/ranger';
import { RaptorPage } from '../raptor/raptor';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController) {

  }

  goToEverestPage(){
    this.navCtrl.push(EverestPage);
  }

  goToRangerPage(){
    this.navCtrl.push(RangerPage);
  }

  goToRaptorPage(){
    this.navCtrl.push(RaptorPage);
  }
}
