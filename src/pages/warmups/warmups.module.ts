import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WarmupsPage } from './warmups';

@NgModule({
  declarations: [
    WarmupsPage,
  ],
  imports: [
    IonicPageModule.forChild(WarmupsPage),
  ],
})
export class WarmupsPageModule {}
