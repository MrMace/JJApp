import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StretchesPage } from './stretches';

@NgModule({
  declarations: [
    StretchesPage,
  ],
  imports: [
    IonicPageModule.forChild(StretchesPage),
  ],
})
export class StretchesPageModule {}
