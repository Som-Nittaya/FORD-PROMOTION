import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EverestPage } from './everest';

@NgModule({
  declarations: [
    EverestPage,
  ],
  imports: [
    IonicPageModule.forChild(EverestPage),
  ],
})
export class EverestPageModule {}
