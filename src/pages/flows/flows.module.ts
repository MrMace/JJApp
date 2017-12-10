import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlowsPage } from './flows';

@NgModule({
  declarations: [
    FlowsPage,
  ],
  imports: [
    IonicPageModule.forChild(FlowsPage),
  ],
})
export class FlowsPageModule {}
