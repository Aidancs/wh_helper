import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-unit-modal',
	templateUrl: 'unit-modal.html',
})
export class UnitModalPage {
	unit: any;
	type: string;
	command_abilities: boolean = false;
	abilities: boolean = false;
	magic: boolean = false;
	melee_weapons: boolean = false;
	missile_weapons: boolean = false;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
	) {
	}

	ngOnInit() {
		this.unit = this.navParams.get('unit');
		this.type = this.navParams.get('type');

		if (this.type === 'abilities') {
			this.abilities = true;
		}
		else if (this.type === 'command_abilities') {
			this.command_abilities = true;
		}
		else if (this.type === 'magic') {
			this.magic = true;
		}
		else if (this.type === 'melee_weapons') {
			this.melee_weapons = true;
		}
		else if (this.type === 'missile_weapons') {
			this.missile_weapons = true;
		}
	}

	closeModal() {
		this.viewCtrl.dismiss();
	}

}
