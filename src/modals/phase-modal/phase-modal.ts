import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-phase-modal',
  templateUrl: 'phase-modal.html',
})
export class PhaseModalPage {

  phases = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) { }

  ngOnInit() {
    this.phases = this.navParams.get('phase');
    console.log(this.phases, 'phase modal phases')
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
