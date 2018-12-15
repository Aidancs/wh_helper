import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnitModalPage } from './unit-modal';

@NgModule({
  declarations: [
    UnitModalPage,
  ],
  imports: [
    IonicPageModule.forChild(UnitModalPage),
  ],
  entryComponents: [
    UnitModalPage,
  ],
})
export class UnitModalPageModule { }
