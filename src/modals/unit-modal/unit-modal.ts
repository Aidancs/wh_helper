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
	data: any;
	unitModalArray = [] as number[];
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
			for (let i = 0; i < this.unit.abilities.length; ++i) {
				this.unitModalArray.push(this.unit.abilities[i]);
			}
		}
		else if (this.type === 'command_abilities') {
			this.command_abilities = true;
			this.data = this.unit.command_ability;
		}
		else if (this.type === 'magic') {
			this.magic = true;
			for (let i = 0; i < this.unit.magic.length; ++i) {
				this.unitModalArray.push(this.unit.magic[i]);
			}
		}
		else if (this.type === 'melee_weapons') {
			this.melee_weapons = true;

			for (let i = 0; i < this.unit.melee_weapons.length; ++i) {
				this.unitModalArray.push(this.unit.melee_weapons[i]);
			}
		}
		else if (this.type === 'missile_weapons') {
			this.missile_weapons = true;

			for (let i = 0; i < this.unit.missile_weapons.length; ++i) {
				this.unitModalArray.push(this.unit.missile_weapons[i]);
			}
		}
	}

	closeModal() {
		this.viewCtrl.dismiss();
	}
}
