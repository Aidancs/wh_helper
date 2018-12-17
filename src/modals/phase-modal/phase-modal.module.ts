import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhaseModalPage } from './phase-modal';

@NgModule({
  declarations: [
    PhaseModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PhaseModalPage),
  ],
})
export class PhaseModalPageModule {}
