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
	missle_weapons: boolean = false;


	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
	) {
	}

	ngOnInit() {
		this.unit = this.navParams.get('unit');
		this.type = this.navParams.get('type');
		console.log(this.type, 'type')
		console.log(this.unit.command_ability, 'this.unit')
		if (this.type === 'abilities') {
			this.abilities = this.unit.abilities;
		}
		else if (this.type === 'command_abilities') {
			this.command_abilities = this.unit.command_ability;
		}
		else if (this.type === 'magic') {
			this.magic = this.unit.magic;
		}
		else if (this.type === 'melee_weapons') {
			this.melee_weapons = this.unit.melee_weapons;
		}
		else if (this.type === 'missle_weapons') {
			this.missle_weapons = this.unit.missle_weapons;
		}
	}

	closeModal() {
		this.viewCtrl.dismiss();
	}

}
