import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { AbilitiesService } from '../../services/abilities.service';
import { CommandAbilitiesService } from '../../services/command-abilities.service';
import { MagicService } from '../../services/magic.service';
import { MeleeWeaponsService } from '../../services/melee-weapons.service';
import { MissleWeaponsService } from '../../services/missle-weapons.service';
import { UnitsService } from '../../services/units.service';

@IonicPage()
@Component({
	selector: 'page-unit-modal',
	templateUrl: 'unit-modal.html',
})
export class UnitModalPage {
	unit: any;
	type: string;
	unitModalArray = [] as number[];
	command_abilities: boolean = false;
	abilities: boolean = false;
	magic: boolean = false;
	melee_weapons: boolean = false;
	missile_weapons: boolean = false;

	constructor(
		private abilitiesSvc: AbilitiesService,
		private commandAbilitiesSvc: CommandAbilitiesService,
		private magicSvc: MagicService,
		private meleeWeaponsSvc: MeleeWeaponsService,
		private missleWeaponsSvc: MissleWeaponsService,
		private unitsSvc: UnitsService,
		public navCtrl: NavController,
		public navParams: NavParams,
		public viewCtrl: ViewController,
	) {
	}

	ngOnInit() {
		this.unit = this.navParams.get('unit');
		this.type = this.navParams.get('type');

		// this.unitsSvc.getUnitsJSon().subscribe(result => {
		// 	console.log(result, 'unitsList')
		// });

		if (this.type === 'abilities') {
			this.abilities = true;
			this.abilitiesSvc.getAbilitiesJSon().subscribe(result => {
				this.unitModalArray.push(result);
			});
		}
		else if (this.type === 'command_abilities') {
			this.command_abilities = true;
			this.commandAbilitiesSvc.getCommandAbilitiesJSon().subscribe(result => {
				for (const key of Object.keys(result)) {
					this.unitModalArray.push(result[key]);
				}
			});
		}
		else if (this.type === 'magic') {
			this.magic = true;
			this.magicSvc.getMagicJSon().subscribe(result => {
				this.unitModalArray.push(result);
			});
		}
		else if (this.type === 'melee_weapons') {
			this.melee_weapons = true;
			this.meleeWeaponsSvc.getMeleeWeaponsJSon().subscribe(result => {
				this.unitModalArray.push(result);
			});
		}
		else if (this.type === 'missile_weapons') {
			this.missile_weapons = true;
			this.missleWeaponsSvc.getMissleWeaponsJSon().subscribe(result => {
				this.unitModalArray.push(result);
			});
		}
	}

	closeModal() {
		this.viewCtrl.dismiss();
	}
}
