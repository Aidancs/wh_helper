import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UnitsService } from '../../services/units.service';

@IonicPage()
@Component({
  selector: 'page-phase-modal',
  templateUrl: 'phase-modal.html',
})
export class PhaseModalPage {

  phases = [];

  constructor(
    private unitsSvc: UnitsService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) { }

  ngOnInit() {
    this.phases = this.navParams.get('phase');
    console.log(this.phases, 'phases');

  }

  killed() {
    this.unitsSvc.getUnitsJSon().killed()
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
