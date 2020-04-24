import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RaptorPage } from './raptor';

@NgModule({
  declarations: [
    RaptorPage,
  ],
  imports: [
    IonicPageModule.forChild(RaptorPage),
  ],
})
export class RaptorPageModule {}
